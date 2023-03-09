import React, { useState, useEffect, useRef, Fragment, useContext, memo } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../../../../../store';
import Portal from '../../../../Tools/Portal';
import { Details, getId, search, updatePropertyById, uuid, handReorder, mediaUploader } from '../../../../Tools/Utils';

import { BorderRadius, Margin, Padding } from '../helpers/index';

const Line = styled.div`
    
`;

import AllComponent from './index';



const Block = ({ data, children, ...props }) => {
    const { state, dispatch } = useContext(AppContext);
    const parentBlock = search([state.components], data.parent);
    console.log('parentBlock', parentBlock);

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
            <div >
                <Details title={`Edit Layouts ${data.id}`} onClick={e => {
                    dispatch({ type: 'CURRENT_SETTING', currentSetting: data.id });
                }}>
                    <select onChange={e => handleAddComponent(e)}>
                        <option value=""></option>
                        {Object.keys(AllComponent).map((item, index) => {
                            return <option key={index} value={item}>{item}</option>
                        })}
                    </select>
                    <handReorder.component data={data} handleChangeOrder={handReorder.callback} />
                    <button onClick={handLeRemove}>Remove</button>

                    <div id={"id-" + data.id}></div>
                </Details>
            </div>
            {state?.currentSetting == data.id && <Portal id="setting">
                {/* <Details title={"Border radius"}>
                    <input type="range" min={0} max={100} value={data?.style?.borderRadius?.replace('px', '')} step={1} onChange={e => {
                        const replace = e.target.value;
                        const value = { ...data.style, borderRadius: replace + 'px' }
                        handleUpdate("style", value);
                    }} />
                </Details>
                <Details title={`Props ${state.currentSetting}`} open={true}>
                    <input type="color" value={data.color} onChange={e => {
                        const value = { ...data.style, color: e.target.value }
                        handleUpdate("style", value);
                    }} />
                    <input type="range" min={0} max={7} step={0.2} onChange={e => {
                        const replace = e.target.value;
                        const value = { ...data.style, fontSize: replace + 'rem' }
                        handleUpdate("style", value);
                    }} />
                    </Details>
                */}

                {<input type="range" min={1} max={12} value={data?.style?.flex} step={1} onChange={e => {
                    const replace = e.target.value;
                    const value = { ...data.style, flex: replace }
                    handleUpdate("style", value);
                }} />}
                <Details title={`Upload file`} open={true}>
                    <mediaUploader.component data={data} handleChangeOrder={mediaUploader.callback} />
                </Details>

                <Details title="Border radius">
                    <BorderRadius data={data} />
                </Details>

                <Details title="Espaces">

                    <Details title="Padding">
                        <Padding data={data} />
                    </Details>

                    <Details title="Margin">
                        <Margin data={data} />
                    </Details>

                    {/* minHeight */}
                    <Details title="Min Height">
                        <input type="range" min={0} max={30} value={data?.style?.minHeight?.replace('rem', '')} step={1} onChange={e => {
                            const replace = e.target.value;
                            const value = { ...data.style, minHeight: replace + 'rem' }
                            handleUpdate("style", value);
                        }} />
                    </Details>



                </Details>
            </Portal>}
        </Portal>
        <Line className='layout' style={(data.style ? data.style : {})}>
            {children && children}
        </Line>
    </Fragment>
}

Block.content = ({ data, children }) => {
    return <div style={(data.style ? data.style : {})}>
        {children && children}
    </div>
};

export default Block;