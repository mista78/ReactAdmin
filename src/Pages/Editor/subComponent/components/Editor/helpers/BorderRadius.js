import React, { useState, useEffect, useRef, Fragment, useContext, memo } from 'react';
import { AppContext } from '../../../../../../store';
import { updatePropertyById } from '../../../../Tools/Utils';


const BorderRadius = ({ data }) => {

    const { state, dispatch } = useContext(AppContext);

    const [borderTopLeftRadius, setBorderTopLeftRadius] = useState(data?.style?.borderTopLeftRadius || "0");
    const [borderTopRightRadius, setBorderTopRightRadius] = useState(data?.style?.borderTopRightRadius || "0");
    const [borderBottomLeftRadius, setBorderBottomLeftRadius] = useState(data?.style?.borderBottomLeftRadius || "0");
    const [borderBottomRightRadius, setBorderBottomRightRadius] = useState(data?.style?.borderBottomRightRadius || "0");

    const [ind, setInd] = useState(false);

    const common = (borderBottomLeftRadius.replace("rem", "") === borderBottomRightRadius.replace("rem", "") && borderBottomLeftRadius.replace("rem", "") === borderTopLeftRadius.replace("rem", "") && borderBottomLeftRadius.replace("rem", "") === borderTopRightRadius.replace("rem", "")) && borderBottomLeftRadius.replace("rem", "");

    const handleChangeAll = (e) => {
        setBorderTopLeftRadius(e.target.value);
        setBorderTopRightRadius(e.target.value);
        setBorderBottomLeftRadius(e.target.value);
        setBorderBottomRightRadius(e.target.value);
    }

    const handleSetBorderRadius = () => {
        const borderRadius = {
            ...data?.style,
            borderTopLeftRadius: borderTopLeftRadius.replaceAll("rem", "") + 'rem',
            borderTopRightRadius: borderTopRightRadius.replaceAll("rem", "") + 'rem',
            borderBottomLeftRadius: borderBottomLeftRadius.replaceAll("rem", "") + 'rem',
            borderBottomRightRadius: borderBottomRightRadius.replaceAll("rem", "") + 'rem'
        }

        // remove key if value is 0
        Object.keys(borderRadius).forEach(key => {
            if (borderRadius[key] === 0 || borderRadius[key] === "0" || borderRadius[key] === "0rem") {
                delete borderRadius[key];
            }
        });
        const components = state.components.map(item => updatePropertyById(data.id, item, 'style', borderRadius));
        dispatch({ type: "ADD_COMPONENT", components });
    }

    useEffect(() => {
        handleSetBorderRadius();
    }, [borderTopLeftRadius, borderTopRightRadius, borderBottomLeftRadius, borderBottomRightRadius]);

    return <Fragment>
        <div>
            <input type="range" min={0} max={7} value={common} onChange={handleChangeAll} />
            <button onClick={() => setInd(!ind)}>indiv</button>
        </div>
        {ind && <Fragment>
            <div>
                <label>Border top left radius</label>
                <input type="range" min={0} max={7} value={borderTopLeftRadius.replace("rem", "")} onChange={e => setBorderTopLeftRadius(e.target.value)} />
            </div>
            <div>
                <label>Border top right radius</label>
                <input type="range" min={0} max={7} value={borderTopRightRadius.replace("rem", "")} onChange={e => setBorderTopRightRadius(e.target.value)} />
            </div>
            <div>
                <label>Border bottom left radius</label>
                <input type="range" min={0} max={7} value={borderBottomLeftRadius.replace("rem", "")} onChange={e => setBorderBottomLeftRadius(e.target.value)} />
            </div>
            <div>
                <label>Border bottom right radius</label>
                <input type="range" min={0} max={7} value={borderBottomRightRadius.replace("rem", "")} onChange={e => setBorderBottomRightRadius(e.target.value)} />
            </div>
        </Fragment>}
    </Fragment>

}

export default memo(BorderRadius);