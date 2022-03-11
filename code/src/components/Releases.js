import React from 'react'
import Icons from './Icons'


const Releases = (props) => {
  const releases = props.data
  const Artists = releases.artists.map((artist) => {
     
    return (
      <a href={artist.external_urls.spotify} key={artist.id} alt='artist' className='nav-link artist'>{artist.name}</a>
      )
      })


  return (
    <div className='album-container'>
      <article>
        <div className='album-group'>
        <a className='nav-link' href={releases.external_urls.spotify}>
          <img className='album' src={releases.images[1].url} alt='album cover'/>
        </a>
        <Icons />

        </div>
        <a className='nav-link' href={releases.external_urls.spotify}>
        <h3 className='nav-link'>{releases.name}</h3>
        </a>
        <div className='artist-container'>
        {Artists}
        </div>
        
      </article>
    </div>
       
       )
      }
      
export default Releases;      

      
      
      