import React from './lib/mini-react.js';
import { render } from './lib/mini-react-dom.js';
import App from './App.js';

const root = document.getElementById('root');
render(React.createElement(App, null), root);
