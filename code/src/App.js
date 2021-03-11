import React from 'react'
import data from './data.json'
import Album from 'components/Album'
import Playlist from 'components/Playlist'
import Filter from 'components/Filter'

let albumData = data
export const App = () => {
  const albumFilters = (albumType)=>{
    console.log(albumType)
  }

  return (
    <main className="main">
        <h2>New Albums & Singles</h2>
        <Filter albumChangeType={albumFilters}  />
      <article>
        <Playlist />
        <Album data={albumData} filter={""}/>
      </article>
    </main>
  )
}

