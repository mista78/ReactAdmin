import React, { useState, useEffect, useRef, Fragment, useContext, memo } from 'react';
import { AppContext } from '../../../../../../store';
import Portal from '../../../../Tools/Portal';
import { Details, getId, search, updatePropertyById, uuid, handReorder } from '../../../../Tools/Utils';

import AllComponent from './index';


const Typography = ({ data, children, ...props }) => {
    const { state, dispatch } = useContext(AppContext);

    const parentBlock = search([state.components], data.parent);

    const handLeRemove = () => {
        const parent = data.parent ? search([state.components], data.parent) : state.components;
        const parentComp = data.parent ? parent?.children : parent;
        const findIndex = parentComp.findIndex(item => item.id === data.id);
        parentComp.splice(findIndex, 1);
        const newParent = parentComp;
        const components = state.components.map(item => updatePropertyById(data.id, item, (data.parent ? 'children' : null), newParent));
        dispatch({ type: "ADD_COMPONENT", components });
    }
    const handleUpdate = (key, value) => {
        const components = state.components.map(item => updatePropertyById(data.id, item, key, value));
        dispatch({ type: "ADD_COMPONENT", components });
    }
    const handleAddComponent = (e) => {
        const value = e ? e.target.value : 'Line';
        const newBlock = {
            id: uuid(),
            name: value,
            parent: data.id,
            children: []
        }
        const components = state.components.map(item => updatePropertyById(data.id, item, 'children', [...data.children, newBlock]));
        dispatch({ type: "ADD_COMPONENT", components });
        e && (e.target.value = '');
    };
    const Tag = data.tagName ? data.tagName : 'p';
    return <Fragment>
        <Portal id={getId(data.parent)} >
            <div >
                <Details title={`Edit Typgraphy ${data.id}`} onClick={e => {
                    dispatch({ type: 'CURRENT_SETTING', currentSetting: data.id });
                }}>
                    <input type="text" value={data.content} onChange={e => {
                        handleUpdate("content", e.target.value);
                    }} />
                    <handReorder.component data={data} handleChangeOrder={handReorder.callback} />
                    <button onClick={handLeRemove}>Remove</button>

                    <div id={"id-" + data.id}></div>
                </Details>
            </div>
            {state?.currentSetting == data.id && <Portal id="setting">
                <Details title={`Props ${state.currentSetting}`} open={true}>
                    <select onChange={e => {
                        handleUpdate("tagName", e.target.value);
                    }}>
                        <option value=""></option>
                        <option value="p">p</option>
                        {[...Array(6)].map((item, index) => {
                            return <option key={index} value={`h${index + 1}`}>{`h${index + 1}`}</option>
                        })}
                    </select>
                    <input type="color" value={data?.style?.color} onChange={e => {
                        const value = { ...data.style, color: e.target.value }
                        handleUpdate("style", value);
                    }} />
                    <input type="range" min={0} max={7} value={data?.style?.fontSize?.replace("rem", '')} step={0.2} onChange={e => {
                        const replace = e.target.value;

                        const value = { ...data.style, fontSize: replace + 'rem' }
                        handleUpdate("style", value);
                    }} />
                </Details>
            </Portal>}
        </Portal>
        <Tag onClick={() => {
            dispatch({ type: 'CURRENT_SETTING', currentSetting: data.id });
        }} onBlur={e => {
            handleUpdate("content", e.target.innerHTML);
        }} style={(data.style ? data.style : {})} contenteditable="true">
            {data.content ? data.content : 'Default content'}
        </Tag>
        {children && children}
    </Fragment>
}

Typography.content = ({ data, children }) => {

    const Tag = data.tagName ? data.tagName : 'p';
    return <Fragment>
        <Tag style={(data.style ? data.style : {})}>
            {data.content ? data.content : 'Default content'}
        </Tag>
        {children && children}
    </Fragment>

}

export default Typography;