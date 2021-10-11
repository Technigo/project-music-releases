// index.js is the most important file, the root-file of all files. Have to import everything here. 
import React from 'react'
// react dom is an object with an important method. 
import ReactDOM from 'react-dom'
// Always have to import the css-file
import './index.css'
import { App } from './App'

ReactDOM.render(<App />, document.getElementById('root'))

