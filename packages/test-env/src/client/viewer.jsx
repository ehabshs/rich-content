import React from 'react';
import { render } from 'react-dom';
import getPropsFromQuery from './services/get-props-from-query';
import App from '../shared/components/App';
import Viewer from '../shared/components/Viewer';

render(
  <App>
    <Viewer initialState={window.__CONTENT_STATE__} {...getPropsFromQuery()}/>
  </App>,
  document.getElementById('root'),
);
