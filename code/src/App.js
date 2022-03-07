import React from 'react'
import data from './data.json'

import { Album } from './component/Album'

console.log(data)

export const App = () => {
  return (
    <div>
      {data.albums.items.map(item => {
        return (
          <Album key={item.id} item={item} />
        )
      })}
    </div>
  )
}
