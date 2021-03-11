import React from 'react'
import data from './data.json'
import playlistData from './stretch-goal.json'

import { Category } from "./components/Category"
import { SideBar } from "./components/SideBar"

console.log(playlistData)
export const App = () => {
  return (
    <>
      <SideBar playlistData={playlistData.playlists.items} />
      <Category
        data={data.albums.items}
        filter="single"
      />
      <Category
        data={data.albums.items}
        filter="album"
      />
    </>
  )
}
