import React from 'react'
import ReactDOM from 'react-dom'

import { Header } from './components/Header'
import { App } from './App'

import './index.css'

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<App />, document.getElementById('root'));