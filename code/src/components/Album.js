import React from 'react'
import data from '../data.json'
import Artist from './Artist'

const Album = (props) => {

  console.log(props)

  return (
    <div className="album-card">
<<<<<<< HEAD
      <div className="album-cover">
        <div className="icons">
          <img className="icon heart" src="/icons/heart.svg"></img>
          <img className="icon play" src="/icons/play.svg"></img>
          <img className="icon dot" src="/icons/dots.svg"></img>
        </div>
        <img className="album-image" src={props.image} alt={props.name} />
      </div>
=======
      <div className="icons">
        <img className="icon heart" src="/../../public/icons/heart.svg"></img>
        <img className="icon play" src="/code/public/icons/play.svg"></img>
        <img className="icon dot" src="/code/public/icons/dots.svg"></img>
      </div>
      <img className="album-image" src={props.image} alt={props.name} />
>>>>>>> f54088bdda099518b1e41471b85ed0f43cd83b8e
      <a className="album-name" href={props.url}>
        <p>{props.name}</p>
      </a>
      
<<<<<<< HEAD
      <div>
        <Artist
          artists={props.artist}
        />
      </div>
      </div>
  )
}



export default Album

{/* </div>
      {props.artist.map(artist => {
        return <Artist key={artist.id} name={artist.name} url={artist.external_urls.spotify}/>
      })} */}
=======
      {props.artist.map(artist => {
        return <Artist key={artist.id} name={artist.name} url={artist.external_urls.spotify}/>
      })}

    </div>
  )
}

// const Album = data.albums.items.map((album) => {
//   return (
//     <div className="album-card">
//       <img className="album-image" src={album.images[0].url} alt={album.name} />
//       <p className="album-name">{album.name}</p>
//       <Artist />
//     </div>
//   )
//   })

export default Album
>>>>>>> f54088bdda099518b1e41471b85ed0f43cd83b8e
