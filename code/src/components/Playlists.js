import React from 'react'
import Icons from './Icons'


const Playlists = (props) => {
  const playlists = props.data
  console.log(playlists)
  return (
    <div className='album-container'>
      <article>
        <div className='album-group'>
            
          <img className='album' src={playlists.images[0].url} alt='playlist cover'/>

        <Icons />

        </div>
        <a className='nav-link' href={playlists.external_urls.spotify}>
        <h3 className='nav-link'>{playlists.name}</h3>
        </a>
      </article>
    </div>
       
       )
      }
      
export default Playlists;      
