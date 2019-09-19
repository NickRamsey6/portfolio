import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import { HashRouter } from 'react-router-dom';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import './index.css';

const render = (Component) => {
  ReactDom.render(
    <HashRouter>
      <Component/>
    </HashRouter>,
    document.getElementById('react-app-root')
  );
};

render(App);

/*eslint-disable */
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
/*eslint-enable */
