import React from 'react'
import data from './data.json'

import { Album } from './component/Album'
import { Header } from './component/Header'

console.log(data)


export const App = () => {
  return (
  <article className='app-body'>
    <div>
      < Header />
    </div>
    <div className='app-wrap'>
      {data.albums.items.map(item => {
        return (
          <Album key={item.id} item={item} />
        )
      })}
    </div>
    </article>
  )
}
