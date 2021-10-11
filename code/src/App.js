import React from 'react'
import data from './data.json'

import { Vinyl } from './components/Vinyl'

console.log(data)

export const App = () => {
  return (
    <>
      <main className="album-container">
        <Vinyl />
      </main>
    </>
  )
}
