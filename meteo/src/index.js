import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory} from 'react-router';

import Root from './Root.jsx';
import './index.css';

const rootEl = document.getElementById('root');


ReactDOM.render(
  <Root history={hashHistory}/>,
  rootEl
);
