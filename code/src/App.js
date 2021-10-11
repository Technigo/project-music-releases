import React from 'react'
import data from './data.json'

import Article from './components/Article'

console.log(data)

export const App = () => {
  return (
  <div>
    <Article 
      title ="Spring is coming!" 
      description="Just a descritpion"
      blabla="blublublu"
    />
    
    <Article 
      title ="Spring is coming sooner!" 
      description="Just a descritpion"
      blabla="blublublu"
    />
  </div>
  )
}
