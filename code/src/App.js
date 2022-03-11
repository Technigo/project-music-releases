import React from 'react'
import data from './data.json'
import AlbumPhoto from './components/AlbumPhoto'
import AlbumName from './components/AlbumName'
import Artists from './components/Artists'

console.log(data)


export const App = () => {

  const album = data.albums.items.filter(item => item.album_type === "album")
  const single = data.albums.items.filter(item => item.album_type === "single")

  return (
    <div className='container'>

    <section>

    <h2>New Albums</h2>
    <div className='displayAlbum'>
    {album.map((props) => {
      return(

      <div key = {props.id} className='album'>
        <AlbumPhoto album = {props}/>     
    
        <AlbumName name = {props}/>

        <Artists name= {props.artists}/>
      </div> 
      )
    })
    }
  </div>
</section>
{

<section>
  <h2>New Singles</h2>
  <div className='displayAlbum'>
    {single.map((props) => {
      return(
      <div key = {props.id} className='album'>
        <AlbumPhoto album = {props}/>

        <AlbumName name = {props}/>

        <Artists name= {props.artists}/>
      </div>
      )
    })
    }
  </div>
  </section> }
</div>
  )
}
