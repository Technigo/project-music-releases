import React from 'react'
import data from './data.json'

import Article from './components/Article'
console.log(data)


export const App = () => {
  return (
  <div>
    <Article 
      title="Spring is coming!" 
      description="this is description" 
      img="https://www.placecage.com/140/100"/>

    <Article 
      title="Wintwer is coming!" 
      description="this is another description" 
      img="https://www.placecage.com/g/140/100"/>
    <Article 
      title="Fall is coming!" 
      description="this is another description" 
      img="https://www.placecage.com/300/200"/>
  </div>
  )
}
