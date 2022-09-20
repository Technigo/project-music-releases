import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App';

const container = document.getElementById('root');
const root = createRoot(container);
// const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
