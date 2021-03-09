import React from 'react'
import data from './data.json'

import { CategoryHeading } from "./components/CategoryHeading"
import { CategoryContainer } from "./components/CategoryContainer"

console.log(data)

export const App = () => {
  return (
    <div>
      <CategoryHeading />
      <CategoryContainer data={data.albums.items} />
    </div>
  )
}
