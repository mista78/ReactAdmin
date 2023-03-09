import React, { useState, useEffect, useRef, Fragment, useContext, memo } from 'react';
import { AppContext } from '../../../../../store';

import AllComponent from '../Editor/component/index';

const View = ({ data }) => {
    return <Fragment>
        {data && data?.map((item, index) => {
            const Component = AllComponent[item.name];
            if (!Component) return null;
            return <Component.content key={item.id} data={item} position={index}>
                {item.children && <View data={item.children} parent={data} index={index} />}
            </Component.content>
        })}
    </Fragment>
};

const Moodboard = ({state}) => {
    return <Fragment>
        <View data={state.components} />
    </Fragment>
}

export default Moodboard;