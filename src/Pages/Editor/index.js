import React, { useState, useEffect, useRef, Fragment, useContext, memo } from 'react';
import { renderToString } from 'react-dom/server';
import {Moodboard,Editor} from './subComponent';
import { AppContext } from '../../store';
const App = () => {
    const { state, dispatch } = useContext(AppContext);
    const [html, setHtml] = useState('');

    useEffect(() => {
        // const html = renderToString(<Moodboard state={state} />);
        // dispatch({ type: 'SET_HTML', html });
        // setHtml(html);
    }, [state.components]);

    useEffect(() => {
        console.log(html);
    }, [html]);

    return <Fragment>
        <Editor />
    </Fragment>
}

export default App;