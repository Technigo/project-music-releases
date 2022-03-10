import React from 'react'
import data from './data.json'
import AlbumPhoto from './components/AlbumPhoto'
import AlbumName from './components/AlbumName'
import Artists from './components/Artists'

console.log(data)


export const App = () => {

  const album=data.albums.items.filter(item => item.album_type === "album")
  const single=data.albums.items.filter(item => item.album_type === "single")

  return (
    <div className='container'>

    <section>

    <h2>New Albums</h2>
    <div className='displayAlbum'>
    {album.map(props => {
      return(

      <div className='album'>
        <AlbumPhoto photo = {props.images[0].url}
         link = {props.external_urls.spotify}
         alt = {props.name}
        />

        <AlbumName title= {props.name} 
        link={props.external_urls.spotify}/>

        <Artists name= {props.artists}/>
      </div> 
      )
    })
    }
  </div>
</section>

  <section>

  <h2>New Singles</h2>
  <div className='displayAlbum'>
    {single.map(props => {
      return(
      <div className='album'>
        <AlbumPhoto photo= {props.images[0].url}
        link={props.external_urls.spotify}
        alt = {props.name}/>

        <AlbumName title= {props.name} 
        link={props.external_urls.spotify}/>
         <Artists name= {props.artists}/>
      </div>
      )
    })
    }
  </div>
  </section>
</div>
  )
}
