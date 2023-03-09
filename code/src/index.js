/* eslint-disable linebreak-style */
import { createRoot } from 'react-dom';
import './index.css';
import './icons.css';
import './header.css';
import './album-list.css';
import './album-card.css';
import './album-artist.css';
import './app.css';
import React from 'react';
import { App } from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);
