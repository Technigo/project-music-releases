import React from 'react';
import { createRoot } from 'react-dom';
import './index.css';
// import default exported App component
// import App from './App';

// import named exported App component
import { App } from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);
