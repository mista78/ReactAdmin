import React, { useState, useEffect, useRef, Fragment, useContext, memo } from 'react';
import Portal from '../../../Tools/Portal';
import styled, { createGlobalStyle } from "styled-components";
import axios from 'axios';

import { uuid, Details, updatePropertyById, search, GenerateUrl } from '../../../Tools/Utils';

import { AppContext } from '../../../../../store';

import AllComponent from './component/index';

import IFrame from '../../../Tools/Iframe';
import DataUrl from '../../../../../Services/Urls';
const Root = styled.div`
    max-width: 100%;
    margin-inline: auto;
`;

const BodyEditor = styled.div`
    background: #2F2F30;
    border-radius: 5px;
    display: grid;
    grid-template-columns: 2fr 6fr 2fr;
    grid-column-gap: 1rem;
    padding-inline: 1rem;
    height: 80vh;
    position: relative;
    z-index: 1000;
    .details {
        border-bottom: 1px solid #2F2F30;
        &__summary {
            padding-block: 1.75rem;
            padding-inline: 1rem;
        }

        &__body {
            padding-block: 1.375rem;
            padding-inline: 1rem;
            border-top: 1px solid #2F2F30;
            & .details {
                border-bottom: none;
                &__summary {

                }
                &__body {
                    padding-inline: -1rem;
                }
            }
        }
    }
    & #sidebar, & #setting {
        overflow-y: auto;
        input, select, button {
            padding: 4px;

            width: 100%;
            height: 20px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
            align-self: stretch;

            background: transparent;

            border: 1px solid #2F2F30;

            color: #fff;
        }
        background: #1D1D1C;
        border-radius: 5px;
        button {
            width: fit-content;
        }
    }
`;


const Theader = styled.div`
    margin-bottom: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    background: #1D1D1C;
    padding: .5rem;
    & input, & select, & .btn{
        padding: 4px;

            width: 100%;
            height: 20px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
            align-self: stretch;

            background: transparent;

            border: 1px solid #2F2F30;
            color: #fff;

            cursor: pointer;
    }


    & .size, & .publish, & .add {
        display: flex;
        align-items: center;
    }
`;
const GlobalStyle = `
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
body {
  margin: 0;
  padding: 0;
  background: #1D1D1C;
  color: #fff;
  padding: 2rem 2.5rem;
}
* {
    box-sizing: border-box;
}
.layout {
    min-height: 226px;
    width: 100%;
    border: 1px dashed #3453F5;
}
`;

const Grid = styled.div`
    display: grid;
    background: #1D1D1C;
`;

const View = ({ data }) => {
    return <Fragment>
        {data && data?.map((item, index) => {
            const Component = AllComponent[item.name];
            if (!Component) return null;
            return <Component key={item.id} data={item} position={index}>
                {item.children && <View data={item.children} parent={data} index={index} />}
            </Component>
        })}
    </Fragment>
};


const Editor = () => {
    const { state, dispatch } = useContext(AppContext);
    const [pages, setPages] = useState([]);
    // const RequestUrl = GenerateUrl(DataUrl.Editor, ["GET", "POST"]);
    const handleAddComponent = (e) => {
        const value = e ? e.target.value : 'Line';
        const { components } = state;
        const obj = {
            id: uuid(),
            name: value,
            parent: null,
            children: []
        }
        const newComponents = [...components, obj];
        dispatch({ type: "ADD_COMPONENT", components: newComponents });
        e && (e.target.value = '');
    };

    const handleBreaksite = (value) => {
        dispatch({ type: "MODE_BREAKSIZE", breaksize: value });
    };

    useEffect(() => {
        (async () => {
            const response = await axios.get(RequestUrl.get.get_pages);
            const { data } = response;
            if (data) {
                setPages(data);
            }

        })();
    }, [])


    useEffect(() => {
    }, [state.components]);
    var jsEncode = {
        encode: function (s, k) {
            var enc = "";
            var str = "";
            // make sure that input is string
            str = s.toString();
            for (var i = 0; i < s.length; i++) {
                // create block
                var a = s.charCodeAt(i);
                // bitwise XOR
                var b = a ^ k;
                enc = enc + String.fromCharCode(b);
            }
            return enc;
        }
    };

    return <Fragment>
        <Portal id="root">
            <Root>
                <Theader>
                    <div className='add'>
                        <div className='btn' onClick={() => {
                            navigator.clipboard.writeText(JSON.stringify(state.components));
                        }}>Get code</div>
                        <select onChange={e => {
                            handleAddComponent(e)
                        }}>
                            <option value=""></option>
                            {Object.keys(AllComponent)?.map((item, index) => {
                                return <option key={index} value={item}>{item}</option>
                            })}
                        </select>
                        <select onChange={e => {
                            const value = e.target.value;
                            if (!value) return;
                            let data = [];
                            try {
                                console.log(pages.find(item => item.ID == value).post_content);
                                data = JSON.parse(jsEncode.encode(pages.find(item => item.ID == value).post_content));
                            } catch (error) {
                                console.log(error);
                            }
                            console.log("comp", data.components);
                            dispatch({ type: "ADD_COMPONENT", components: (data.components && Array.isArray(data.components)) ? data.components : [] });
                            dispatch({ type: "CURRENT_PAGE", currentPage: value });
                        }}>
                            <option value="">Page</option>
                            {pages.map((item, index) => {
                                return <option key={index} value={item.ID}>{item.post_name}</option>
                            })}
                        </select>
                    </div>
                    <div className='size'>
                        <div className='btn' onClick={() => handleBreaksite(100)}>Desktop</div>
                        <div className='btn' onClick={() => handleBreaksite(50)}>Mobile</div>
                    </div>

                    <div className='publish'>
                        <div className='btn' onClick={() => {
                            (async () => {
                                const { components, currentPage, html } = state;
                                console.log(components);
                                const response = await axios.post(RequestUrl.post.save_page, {
                                    ID: state.currentPage,
                                    post_content: JSON.stringify({ components, html: html.replace(/"/g, "'") })
                                });
                                const { data } = response;
                                console.log(response);
                                if (data && response.status == 200) {
                                    (async () => {
                                        const response = await axios.get(RequestUrl.get.get_pages);
                                        const { data } = response;
                                        if (data) {
                                            setPages(data);
                                        }
                                    })();
                                }
                            })();
                        }}>Publish</div>
                    </div>
                </Theader>
                <BodyEditor>
                    <div id="sidebar"></div>
                    <Grid id="preview">
                        <IFrame>
                            <style dangerouslySetInnerHTML={{ __html: GlobalStyle }} />
                            <View data={state.components} />
                        </IFrame>
                    </Grid>
                    <div id="setting"></div>
                </BodyEditor>
            </Root>
        </Portal>
    </Fragment>
}

export default Editor;