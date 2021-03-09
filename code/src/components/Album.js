import React from 'react'
import data from '../data.json'
import Image from 'components/Image'


const Album = () => {

  return (
    <article className="album-wrapper">
      {data.albums.items.map(album => {
        return (
          <div className="album-box">
            <div class="box">
            <Image coverImage={album.images} url={album.external_urls.spotify} target='_blank' />

            <a className="album-name" href={album.external_urls.spotify} target='_blank'>
              <p>{album.name}</p>
            </a>

            <a className="artist-name" href={album.artists[0].external_urls.spotify} target='_blank'>
              <p>{album.artists[0].name}</p>
            </a>
            </div>
          </div>
        )
      })}
    </article>
  )
}



export default Album

