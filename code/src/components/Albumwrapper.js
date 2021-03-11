import React from 'react'
import Image from 'components/Image'
import Album from 'components/Album'
import Artist from 'components/Artist'

//console.log(data.albums.items[0].artists[0].id)

const Albumwrapper = (props) => {
  return (
    <article key={props.id} className="album-wrapper">
      {props.albumWrap.albums.items.map(album => {
        return (
          <div key={props.child} className="album-box" >
            <div className="box">
            <Image coverImage={album.images} url={album.external_urls.spotify} rel="noopener noreferrer" />
            <Album albumcontainer={album.name} albumlink={album.external_urls.spotify}/>
            <Artist  artistcontainer={album.artists} albumlink={album.external_urls.spotify}/>
            </div>
          </div>
        )
      })
    }

    </article>
  )
}


export default Albumwrapper