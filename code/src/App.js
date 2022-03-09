import React from 'react'
import data from './data.json'

import { Article } from 'components/Article'

console.log('data', data)

export const App = () => {

  return <section>  
    {data.albums.items.map((singleArticle) => {
      return <Article key={singleArticle.id} articleDetails={singleArticle}/>
    })}
  </section>
}

