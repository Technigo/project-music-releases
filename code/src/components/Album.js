import React from 'react'
// import { Artist } from '.components/Artist'
// import { Icons } from '.components/Icons'
 
export const Album = (props) => {
  const albums = props.data
  console.log(albums)

  const artists = albums.artists.map(artist => {
    return (
        <h3>{artist.name}</h3>
        )
      })

  return (
    <article>
      <img src={albums.images[1].url} alt='album cover'/>
      <a href={albums.external_urls.spotify}>
      <h2>{albums.name}</h2>
      </a>
      {artists}
    </article>
       
       )
      }
      
      

      
      
      