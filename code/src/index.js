
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { App } from './App'

import { Blipp } from './App'
import { Tre } from './App'

ReactDOM.render(<App />, document.getElementById('root'))
ReactDOM.render(<Blipp />, document.getElementById('root'))
ReactDOM.render(<Tre />, document.getElementById('root'))

// ReactDOM.render(
//   <App />,
//   <Blipp />,
//   <Tre />,
//   document.getElementById('root')

// );