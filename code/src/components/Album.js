import React from 'react'
import data from '../data.json'
import Image from 'components/Image'


const Album = () => {
  
  return (
    <article>
      {data.albums.items.map(album => {
        return (
          <>
            <Image coverImage={album.images} url={album.external_urls.spotify}/>
            <p>{album.name}</p>
            <p>{album.artists[0].name}</p>
          </>
        )
      })}
    </article>
  )
}



export default Album

