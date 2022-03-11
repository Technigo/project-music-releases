import React from 'react'
import data from './data.json'

import AlbumCard from 'components/AlbumCard';
import Header from 'components/Header';


// console.log('data', data)

export const App = () => {
  return (
    <section>
      <Header />
      <div className='all-albums'>
        {data.albums.items.map((singleAlbum) => {
          return <AlbumCard key={singleAlbum.name} newReleases={singleAlbum} />
        })}
      </div>
    </section>
  )
}

