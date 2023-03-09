import React, { useState, useEffect, useRef, Fragment, useContext, memo } from 'react';
import { AppContext } from '../../../store';
import component from '../subComponent/components/Editor/component';
export const selector = (elements, root) => {
    const select = root || document;
    return [...select.querySelectorAll(elements)];
}
export const build = (data, index) => {
    const { tags = 'div', children, content, event, attributes } = data;
    const elements = document.createElement(tags);
    event && elements.addEventListener(event.type, e => event.callback(e));
    attributes && attributes.map(attr => elements.setAttribute(...attr));
    content && (elements.innerHTML = content);
    children && children.map(child => elements.appendChild(build(child, index)));
    return elements;
};

export const GenerateUrl = (object, methods = ["GET"]) => {
    const base = window?.ajaxurl || "";
    return Object.fromEntries(methods?.map(method => {
        return [method.toLowerCase(), Object.fromEntries(Object.keys(object[method.toLowerCase()])?.map(keys => {
            const host = new URL(`${window.location.origin}${base}`);
            const c = object[method.toLowerCase()][keys];
            c.map(({ param, value }) => host.searchParams.append(param, value));
            return [keys, host]
        }))]
    }))
}

export const Details = ({ children, title, row = "row", onClick, open = false }) => {
    return <details className='details' open={open}>
        <summary className='details__summary' onClick={() => {
            onClick && onClick();
        }}>{title}</summary>
        <div className={`details__body ${row}`}>
            {children}
        </div>
    </details>

};

export const getId = (id) => {
    return id ? "id-" + id : "sidebar"
};

export const ranomeColorHex = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
};

export const uuid = () => {
    return 'xxxxxxxx-xxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};

export const clsx = (...args) => {

    const classes = [];
    args.forEach(arg => {
        if (typeof arg === 'string') {
            classes.push(arg);
        } else if (typeof arg === 'object') {
            Object.keys(arg).forEach(key => {
                if (arg[key]) {
                    classes.push(key);
                }
            });
        }
    });

    return classes.join(' ');
};

export const Debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

export const updatePropertyById = (id, test, property, value) => {
    if (test.id == id) {
        if (property === null) {
            test = value
        } else {
            test[property] = value;
        }
    }
    if (test.children !== undefined && test.children.length > 0) {
        for (let i = 0; i < test.children.length; i++) {
            test.children[i] = updatePropertyById(id, test.children[i], property, value);
        }
    }
    return test;
}
export const search = (tree, value, key = 'id', reverse = false) => {
    const stack = [...tree[0]]
    while (stack.length) {
        const node = stack[reverse ? 'pop' : 'shift']()
        if (node[key] === value) return node
        node.children && stack.push(...node.children)
    }
    return null
}

export const swap = (arr, from, to) => {
    arr.splice(from, 1, arr.splice(to, 1, arr[from])[0]);
}

export const ImageUplaoder = ({ data, handleUpdate }) => {

    return <Fragment>
        <div className="sidebar-edition__body__item">
            <label>Upload File</label>
            {data.image && <button onClick={() => {
                handleUpdate({ image: null });
            }}> Reset Image </button>}
            <input type="file" onChange={(e) => {
                const { files } = e.target;
                const [file] = files;
                const reader = new FileReader();
                reader.onload = (e) => {
                    const { result } = e.target;
                    handleUpdate({ image: result });
                };
                reader.readAsDataURL(file);
            }} />
        </div>
    </Fragment>
};

export const mediaUploader = {
    callback: ({ value, context }) => {

    },
    component: ({ data }) => {
        const { state, dispatch } = useContext(AppContext);

        const handleChangeOrder = (value) => {
            const res = value ? `url(${value})` : 'none';
            const components = state.components.map(item => updatePropertyById(data.id, item, "style", { ...item.style, backgroundImage: res }));
            dispatch({ type: "ADD_COMPONENT", components: [...components] });
        }

        return <Fragment>
            <div className="sidebar-edition__body__item">
                {(data?.style?.backgroundImage && data?.style?.backgroundImage !== "none") && <button onClick={() => {
                    handleChangeOrder(null);
                }}> Reset Image </button>}
                <input type="file" onChange={(e) => {
                    const { files } = e.target;
                    const [file] = files;
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        const { result } = e.target;
                        handleChangeOrder(result);
                    };
                    reader.readAsDataURL(file);
                }} />
            </div>
        </Fragment>
    }
}


export const handReorder = {
    callback: (id, direction, context) => {

    },
    component: ({ data, top = "Up", down = "Down" }) => {

        const { state, dispatch } = useContext(AppContext);

        const handleChangeOrder = (id, direction) => {
            const parent = data.parent ? search([state.components], data.parent) : state.components;
            const parentComp = data.parent ? parent.children : parent
            const currentIndex = parentComp.findIndex(item => item.id === data.id);
            const newIndex = direction === "up" ? currentIndex - 1 : currentIndex + 1;
            if (newIndex < 0 || newIndex >= parentComp.length) return;
            parentComp.splice(currentIndex, 1, parentComp.splice(newIndex, 1, parentComp[currentIndex])[0]);
            if (data.parent) {
                state.components.map((item, index) => updatePropertyById(data.parent, item, "children", parentComp));
            } else {
                state.components = parentComp;
            }
            dispatch({ type: "ADD_COMPONENT", components: [...state.components] });
        };


        return <Fragment>
            <div className="sidebar-edition__body__item">
                <label>Change Order</label>
                <button onClick={() => handleChangeOrder(data.id, "up", { data })}>{top}</button>
                <button onClick={() => handleChangeOrder(data.id, "down", { data })}>{down}</button>
            </div>
        </Fragment>
    }
}