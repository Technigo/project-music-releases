import React from 'react'
// import { Artist } from '.components/Artist'
// import { Icons } from '.components/Icons'
 
export const Album = (props) => {
  const albums = props.data

  const artists = albums.artists.map((artist) => {
    return (
        <h3>{artist.name}</h3>
        )
      })

  return (
    <div className='album-container'>
      <article>
        <img src={albums.images[1].url} alt='album cover'/>
        <a className='nav-link' href={albums.external_urls.spotify}>
        <h2>{albums.name}</h2>
        </a>
        {artists}
      </article>
    </div>
       
       )
      }
      
      

      
      
      