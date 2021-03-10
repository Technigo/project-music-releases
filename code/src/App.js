import React from 'react'
import data from './data.json'

import { Category } from "./components/Category"


export const App = () => {
  return (
    <div>
      <Category data={data.albums.items} filter="single" />
      <Category data={data.albums.items} filter="album" />
    </div>
  )
}
