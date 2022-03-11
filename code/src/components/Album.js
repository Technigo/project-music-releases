import React from 'react'
import Artist from './Artist'
import Icon from './Icon'

const Album =(props)=> {
    const Albums = props.data.albums.items

  return (
    <>
    <h1>New albums & singles</h1>
    <div className='container'>
    {Albums.map((item,key)=> 
    <div className='album-container' key = {item.id}>

    <div className='image-container'>
      <img className='image-album' 
      src={item.images[1].url} 
      alt={item.name}/>
      <Icon/>
    </div>

    <h2>
      <a className="album-link" 
      href={item.external_urls.spotify} 
      target='_blank' rel="noopener noreferrer">
      {item.name}
      </a>
    </h2>
    <Artist item = {item}/>
    </div>
)}
</div>
    </>
  )
}

export default Album