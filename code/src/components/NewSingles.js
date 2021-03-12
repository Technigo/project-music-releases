import React from 'react'
import Image from 'components/Image'
import Album from 'components/Album'
import Artist from 'components/Artist'


//console.log(data.albums.items[0].artists[0].id)

const Albumwrapper2 = (props) => {
  return (
    <article className="album-wrapper">
      {props.albumWrap.albums.items.filter(album =>
        album.album_type === "single").map((album) => {
          return (
            <div key={album.id} className="album-box" >
              <div className="box">
                <Image coverImage={album.images} url={album.external_urls.spotify} rel="noopener noreferrer" />
                <Album albumcontainer={album.name} albumlink={album.external_urls.spotify} />
                <Artist artistcontainer={album.artists} albumlink={album.external_urls.spotify} />
              </div>
            </div>
          )

        })
      }
    </article>
  )


}


export default Albumwrapper2