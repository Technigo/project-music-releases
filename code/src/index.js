import { createRoot } from 'react-dom';
import './index.css';
import React from 'react';
import { App } from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />); // this says to take everything from the App
// file and show it under root div in html
