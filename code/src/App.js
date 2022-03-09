import React from 'react'
import data from './data.json'
import AlbumPhoto from './AlbumPhoto'
import AlbumName from 'AlbumName'

console.log(data)


export const App = () => {
  const album=data.albums.items.filter(item => item.album_type === "album" )
  const single=data.albums.items.filter(item => item.album_type === "single" )
  

  return (
    <div className='container'>
      <section>
    <h2>Albums</h2>
    <div className='displayAlbum'>
    {album.map(props => {
      return(
      <div className='album'>
        <AlbumPhoto photo= {props.images[0].url}/>
        <AlbumName title= {props.name} 
        link={props.external_urls.spotify}/>
      </div>
      )
    })
    }
  </div>
</section>

  <section>
  <h2>Singles</h2>
  <div className='displayAlbum'>
    {single.map(props => {
      return(
      <div className='album'>
        <AlbumPhoto photo= {props.images[0].url}/>
        <AlbumName title= {props.name} 
        link={props.external_urls.spotify}/>
      </div>
      )
    })
    }
  </div>
  </section>
</div>
  )
}
