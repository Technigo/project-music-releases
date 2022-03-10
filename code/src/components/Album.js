import React from 'react'
// import { Artist } from '.components/Artist'
// import Icons from './components/Icons'
import Heart from '../icons/heart.svg'
import Play from '../icons/play.svg'
import Dots from '../icons/dots.svg'
 
const Album = (props) => {
  const albums = props.data

  const artists = albums.artists.map((artist) => {
    return (
        <h3>{artist.name}</h3>
        )
      })

  return (
    <div className='album-container'>
      <article>
        <div className='album-group'>
          <img className='album' src={albums.images[1].url} alt='album cover'/>

          <div className="icon-container overlay">
            <img className='icon heart' src={Heart} alt='heart icon'/>
            <img className='icon play' src={Play} alt='play icon'/>
            <img className='icon dot' src={Dots} alt='dots icon' />
          </div>

        </div>
        <a className='nav-link' href={albums.external_urls.spotify}>
        <h2 className='nav-link'>{albums.name}</h2>
        </a>
        {artists}
        
      </article>
    </div>
       
       )
      }
      
export default Album;      

      
      
      