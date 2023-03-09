import React, { useState, useEffect, useRef, Fragment, useContext, memo } from 'react';
import { AppContext } from '../../../../../../store';

import { updatePropertyById } from '../../../../Tools/Utils';


const Margin = ({ data }) => {
    const { state, dispatch } = useContext(AppContext);

    const [marginTop, setMarginTop] = useState(data?.style?.marginTop || "0");
    const [marginRight, setMarginRight] = useState(data?.style?.marginRight || "0");
    const [marginBottom, setMarginBottom] = useState(data?.style?.marginBottom || "0");
    const [marginLeft, setMarginLeft] = useState(data?.style?.marginLeft || "0");

    const [ind, setInd] = useState(false);

    const common = (marginTop.replace("rem", "") === marginRight.replace("rem", "") && marginRight.replace("rem", "") === marginBottom.replace("rem", "") && marginBottom.replace("rem", "") === marginLeft.replace("rem", "")) && marginTop.replace("rem", "");

    const handleChangeAll = (e) => {
        setMarginBottom(e.target.value);
        setMarginLeft(e.target.value);
        setMarginRight(e.target.value);
        setMarginTop(e.target.value);
    }

    const handleSetMargin = () => {
        const top = marginTop.replaceAll("rem", "") > 0 ? { marginTop: marginTop.replaceAll("rem", "") + 'rem' } : {};
        const right = marginRight.replaceAll("rem", "") > 0 ? { marginRight: marginRight.replaceAll("rem", "") + 'rem' } : {};
        const bottom = marginBottom.replaceAll("rem", "") > 0 ? { marginBottom: marginBottom.replaceAll("rem", "") + 'rem' } : {};
        const left = marginLeft.replaceAll("rem", "") > 0 ? { marginLeft: marginLeft.replaceAll("rem", "") + 'rem' } : {};

        const margin = {
            ...data?.style,
            ...top,
            ...right,
            ...bottom,
            ...left
        }

        // remove key if value is 0
        Object.keys(margin).forEach(key => {
            if (margin[key] === 0 || margin[key] === "0" || margin[key] === "0rem") {
                delete margin[key];
            }
        });
        const components = state.components.map(item => updatePropertyById(data.id, item, 'style', margin));
        dispatch({ type: "ADD_COMPONENT", components });
    }

    useEffect(() => {
        handleSetMargin();
    }, [marginTop, marginRight, marginBottom, marginLeft]);

    return <Fragment>
        <div>
            <input type="range" min={0} max={7} value={common} onChange={handleChangeAll} />
            <button onClick={() => setInd(!ind)}>indiv</button>
        </div>
        {ind && <Fragment>
            <div>
                <label>Margin top</label>
                <input type="range" min={0} max={7} value={marginTop.replace("rem", "")} onChange={e => setMarginTop(e.target.value)} />
            </div>
            <div>
                <label>Margin right</label>
                <input type="range" min={0} max={7} value={marginRight.replace("rem", "")} onChange={e => setMarginRight(e.target.value)} />
            </div>
            <div>
                <label>Margin bottom</label>
                <input type="range" min={0} max={7} value={marginBottom.replace("rem", "")} onChange={e => setMarginBottom(e.target.value)} />
            </div>
            <div>
                <label>Margin left</label>
                <input type="range" min={0} max={7} value={marginLeft.replace("rem", "")} onChange={e => setMarginLeft(e.target.value)} />
            </div>
        </Fragment>}
    </Fragment>
}

export default memo(Margin);