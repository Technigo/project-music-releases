import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import default exported App component
// import App  from './App';

// import named exported App component
import { App } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);