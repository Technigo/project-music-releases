import React from 'react'
import Icons from './Icons'


const Album = (props) => {
  const albums = props.data
  const artists = albums.artists.map((artist) => {
     
    return (
      <a href={artist.external_urls.spotify} key={artist.id} alt='artist' className='nav-link artist'>{artist.name}</a>
      )
      })


  return (
    <div className='album-container'>
      <article>
        <div className='album-group'>
          <img className='album' src={albums.images[1].url} alt='album cover'/>

        <Icons />

        </div>
        <a className='nav-link' href={albums.external_urls.spotify}>
        <h3 className='nav-link'>{albums.name}</h3>
        </a>
        <div className='artist-container'>
        {artists}
        </div>
        
      </article>
    </div>
       
       )
      }
      
export default Album;      

      
      
      