import { createRoot } from 'react-dom';
import './index.css';
import { App } from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);


/* import * as ReactDOMClient from 'react-dom/client';
import { App } from './App';

import './index.css';

const root = ReactDOMClient.createRoot(document.getElementById('root'));

root.render(<App />); */


/* 
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { App } from './App'

ReactDOM.render(<App />, document.getElementById('root')) */