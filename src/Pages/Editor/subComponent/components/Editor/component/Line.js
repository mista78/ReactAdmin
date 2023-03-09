import React, { useState, useEffect, useRef, Fragment, useContext, memo } from 'react';
import { AppContext } from '../../../../../../store';
import Portal from '../../../../Tools/Portal';
import { Details, getId, search, updatePropertyById, uuid, handReorder } from '../../../../Tools/Utils';
import {Margin, Padding} from '../helpers/index';

import AllComponent from './index';

const Line = ({ data, children, ...props }) => {
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
    return <Fragment>
        <Portal id={getId(data.parent)} >
            <div>
                <Details title={`Edit line ${data.id}`} onClick={e => {
                    dispatch({ type: 'CURRENT_SETTING', currentSetting: data.id });
                }}>
                    <select onChange={e => handleAddComponent(e)}>
                        <option value=""></option>
                        {Object.keys(AllComponent).map((item, index) => {
                            return <option key={index} value={item}>{item}</option>
                        })}
                    </select>
                    <button onClick={handLeRemove}>Remove</button>
                    <handReorder.component data={data} handleChangeOrder={handReorder.callback} />
                    <div id={"id-" + data.id}></div>
                </Details>
            </div>
            {state.currentSetting == data.id && <Portal id="setting">
                <Details title={`Props ${state.currentSetting}`} open={true}>
                    <select value={data?.style?.display} onChange={e => {
                        const value = { ...data.style, display: e.target.value }
                        handleUpdate("style", value);
                    }}>
                        <option value="block">Block</option>
                        <option value="flex">Flex</option>
                    </select>
                    {/* flex-direction */}
                    {data?.style?.display === "flex" && <select value={data?.style?.flexDirection} onChange={e => {
                        const value = { ...data.style, flexDirection: e.target.value }
                        handleUpdate("style", value);
                    }}>
                        <option value="row">Row</option>
                        <option value="column">Column</option>
                    </select>}

                    {/* column-gap */}
                    { <input
                        type="range"
                        min={0}
                        max={7}
                        value={data?.style?.columnGap?.replace("rem", '')}
                        step={0.2}
                        onChange={e => {
                            const replace = e.target.value;

                            const value = { ...data.style, columnGap: replace + 'rem' }
                            handleUpdate("style", value);
                        }} />}

                    {/* row-gap */}
                    {<input
                        type="range"
                        min={0}
                        max={7}
                        value={data?.style?.rowGap?.replace("rem", '')}
                        step={0.2}
                        onChange={e => {
                            const replace = e.target.value;

                            const value = { ...data.style, rowGap: replace + 'rem' }
                            handleUpdate("style", value);
                        }} />}
                </Details>
                <Details title="Espaces">
                    
                    <Details title="Padding">
                        <Padding data={data} />
                    </Details>

                    <Details title="Margin">
                        <Margin data={data} />
                    </Details>

                    <button onClick={e => {
                        const value = { ...data.style, marginInline: 'clamp(2.188rem, 4.6vw, 4.375rem)' }
                        handleUpdate("style", value);
                    } }>Margin clamp</button>

                </Details>
            </Portal>}
        </Portal>
        <div className="line" style={(data.style ? data.style : {})}>
            {children && children}
        </div>
    </Fragment>
}

Line.content = ({ data, children }) => {
    return <div style={(data.style ? data.style : {})}>
        {children && children}
    </div>
};

export default Line;