
require('./bootstrap');

import React from "react";
import ReactDOM from 'react-dom';

/**
 * Loading React routes from routes.
 */
import App from './components/App.js';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
