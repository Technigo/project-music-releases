import React from 'react'
import data from './data.json'
import { Album } from './Album'
import { Header } from './Header'

console.log(data)

export const App = () => {
  return (
    <div>
      <Header />
      <Album />
    </div>
  )
}
