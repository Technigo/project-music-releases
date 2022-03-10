import React from 'react'
import data from './data.json'

import { Article } from 'components/Article'
import { Header } from 'components/Header'

console.log('data', data)

export const App = () => {

  return (
    
  <div>
      <Header />
      <section>
      {data.albums.items.map((singleArticle) => {
        return <Article key={singleArticle.id} articleDetails={singleArticle}/>
      })}
     </section>
  </div>

  )
}

