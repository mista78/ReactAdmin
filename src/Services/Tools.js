import React, { useState, useEffect, useRef, Fragment, useContext } from 'react';
import ReactDOM from 'react-dom';
import { AppContext } from "../store";
export const selector = (elements,root) => {
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

export const  HtmlLoader = async (url, callback) => {
    const div = document.createElement('div');
    const data = await window.fetch(url);
    const response = await data.text();
    div.innerHTML = response;
    callback(div);
    return div;
}

export const GenerateUrl = (object, methods = ["GET"]) => {
    const base = window.ajaxurl || "";
    return Object.fromEntries(methods.map(method => {
        return [method.toLowerCase(), Object.fromEntries(Object.keys(object[method.toLowerCase()]).map(keys => {
            const host = new URL(`${window.location.origin}${base}`);
            const c = object[method.toLowerCase()][keys];
            c.map(({ param, value }) => host.searchParams.append(param, value));
            return [keys, host]
        }))]
    })) 
}

export const ranomeColorHex = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
};

export const uuid = () => {
    return 'xxxxxxxx-xxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};

export const Portal = ({ children, id = "portal", className, style }) => {
    className = className || id;
    const exisPortal = selector('#' + id);
    if (exisPortal.length) {
        return ReactDOM.createPortal(children, exisPortal[0]);
    }
    const containerPortal = build({
        tag: 'div',
        attributes: [
            ['id', id],
            ['class', className],
            ['style', style]
        ]
    });
    document.body.appendChild(containerPortal);
    return ReactDOM.createPortal(children, containerPortal);
};

export const IFrame = ({
    children,
    ...props
}) => {
    const { state, dispatch } = useContext(AppContext);
    const [contentRef, setContentRef] = useState(null);
    const mountNode = contentRef?.contentWindow?.document?.body;
    const mountHead = contentRef?.contentWindow?.document?.head;
    const head = document?.head;
    const div = document.createElement('div');
    div.innerHTML = head.innerHTML;
    mountNode && mountNode.classList.add('editor');
    const A = () => {
        return <Fragment><div dangerouslySetInnerHTML={{ __html: head.innerHTML }} /></Fragment>
    };


    return (
        <iframe {...props} ref={setContentRef} width={`${state.mobile ? "40%" : "70%"}`} height="71%">
            {mountHead && ReactDOM.createPortal(<A />, mountHead)}
            {mountNode && ReactDOM.createPortal(<Fragment>
                <div className="Projects if">
                    {children}
                </div>
            </Fragment>, mountNode)}
        </iframe>
    );
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
