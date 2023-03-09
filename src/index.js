import React, { Fragment } from 'react';
import ReactDom, { hydrate, render } from 'react-dom';
import Data from "./config/pages";
import { createGlobalStyle } from 'styled-components';
import { StateProvider } from './store';
const GlobalStyle = createGlobalStyle`
::marker {
  content: "";
}
body {
  margin: 0;
  padding: 0;
  background: #2F2F30;
  color: #fff;
}
#wpcontent {
  padding-left: 0;
}
`;


const Component = Data["Editor"];
const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<Fragment>
    <GlobalStyle />
    <StateProvider>
      <Component />
    </StateProvider>
  </Fragment>, rootElement);
} else {
  render(<Fragment>
    <GlobalStyle />
    <StateProvider>
      <Component />
    </StateProvider>
  </Fragment>, rootElement);
}