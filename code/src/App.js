import React from 'react'
import data from './data.json'

import Article from './components/Article'
console.log(data)



export const App = () => {
  return (
  <div>
  <Article />
  <Article />
  <Article />
</div>

  )
}
