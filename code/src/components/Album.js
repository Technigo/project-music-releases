import React from 'react'
//import data from '../data.json'
import Image from 'components/Image'
//import Filter from 'components/Filter'


//console.log(data.albums.items[0].artists[0].id)


const Album = ({data, filter}) => {
  return (
    <article className="album-wrapper">
      {
      data.albums.items.filter(album =>
       filter ? album.album_type === filter : album.album_type
      ).map((album)=> {
        return (
          <div className="album-box">
            <div className="box">
            <Image coverImage={album.images} url={album.external_urls.spotify} rel="noopener noreferrer" />
            <a className="album-name" href={album.external_urls.spotify} rel="noopener noreferrer">
              <p>{album.name}</p>
            </a>
      
            <a className="artist-name" href={album.artists[0].external_urls.spotify} rel="noopener noreferrer" >
              <p>{album.artists[0].name}</p>
            </a>
            </div>
          </div>
        )
      })
    }
    </article>
  )
}


export default Album;