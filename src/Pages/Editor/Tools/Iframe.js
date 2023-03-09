import React, { useState, useEffect, useRef, Fragment, useContext, memo } from 'react';
import { createPortal } from 'react-dom';
import { AppContext } from '../../../store';

import styled from 'styled-components';

const Iframe = styled.iframe`
        height: 100%;
        border: 1px dashed #ccc;
        margin: 0;
        padding: 0;
        overflow: hidden;
        margin: 0 auto;
    `;


const IFrames = ({
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


    return <Fragment>
        <Iframe {...props} ref={setContentRef} width={`${state.breaksize ? state.breaksize + "%" : "100%"}`} height="100%">
            {mountHead && createPortal(<A />, mountHead)}
            {mountNode && createPortal(<Fragment>
                <div className="Projects if">
                    {children}
                </div>
            </Fragment>, mountNode)}
        </Iframe>
    </Fragment>;
};

export default IFrames;