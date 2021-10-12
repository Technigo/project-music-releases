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
    img="https://via.placeholder.com/350x150"/>

<Article 
    title="Wintwer is coming!" 
    description="this is another description" 
    img="https://via.placeholder.com/300x300"/>
</div>
  )
}
