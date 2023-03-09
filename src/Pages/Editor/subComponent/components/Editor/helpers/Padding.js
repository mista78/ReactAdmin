import React, { useState, useEffect, useRef, Fragment, useContext, memo } from 'react';
import { AppContext } from '../../../../../../store';
import { updatePropertyById } from '../../../../Tools/Utils';

const Padding = ({ data }) => {
    const { state, dispatch } = useContext(AppContext);

    const [paddingTop, setPaddingTop] = useState(data?.style?.paddingTop || "0");
    const [paddingRight, setPaddingRight] = useState(data?.style?.paddingRight || "0");
    const [paddingBottom, setPaddingBottom] = useState(data?.style?.paddingBottom || "0");
    const [paddingLeft, setPaddingLeft] = useState(data?.style?.paddingLeft || "0");

    const [ind, setInd] = useState(false);

    const common = (paddingBottom.replace("rem", "") == paddingLeft.replace("rem", "") && paddingLeft.replace("rem", "") == paddingRight.replace("rem", "") && paddingRight.replace("rem", "") == paddingTop.replace("rem", "")) && paddingBottom.replace("rem", "");


    const handleChangeAll = (e) => {
        setPaddingBottom(e.target.value);
        setPaddingLeft(e.target.value);
        setPaddingRight(e.target.value);
        setPaddingTop(e.target.value);
    }

    const handleSetPadding = () => {
        const padding = {
            ...data?.style,
            paddingTop: paddingTop.replaceAll("rem", "") + 'rem',
            paddingRight: paddingRight.replaceAll("rem", "") + 'rem',
            paddingBottom: paddingBottom.replaceAll("rem", "") + 'rem',
            paddingLeft: paddingLeft.replaceAll("rem", "") + 'rem'
        }

        // remove key if value is 0
        Object.keys(padding).forEach(key => {
            if (padding[key] === 0 || padding[key] === "0" || padding[key] === "0rem") {
                delete padding[key];
            }
        });
        
        const components = state.components.map(item => updatePropertyById(data.id, item, 'style', padding));
        dispatch({ type: "ADD_COMPONENT", components });
    }

    useEffect(() => {
        handleSetPadding();
    }, [paddingTop, paddingRight, paddingBottom, paddingLeft]);

    return <Fragment>
        <div>
            <input type="range" min={0} max={7} value={common} onChange={handleChangeAll} />
            <button onClick={() => setInd(!ind)}>indiv</button>
        </div>
        {ind && <Fragment>
            <div>
                <label>Padding top</label>
                <input type="range" min={0} max={7} value={paddingTop.replace("rem", "")} onChange={e => setPaddingTop(e.target.value)} />
            </div>
            <div>
                <label>Padding right</label>
                <input type="range" min={0} max={7} value={paddingRight.replace("rem", "")} onChange={e => setPaddingRight(e.target.value)} />
            </div>
            <div>
                <label>Padding bottom</label>
                <input type="range" min={0} max={7} value={paddingBottom.replace("rem", "")} onChange={e => setPaddingBottom(e.target.value)} />
            </div>
            <div>
                <label>Padding left</label>
                <input type="range" min={0} max={7} value={paddingLeft.replace("rem", "")} onChange={e => setPaddingLeft(e.target.value)} />
            </div>
        </Fragment>}
    </Fragment>

}

export default memo(Padding);