import React from 'react';
import Image from './Image'
import AlbumName from './AlbumName'

// NEW RELEASES CARD
const Card = (props) => {
    console.log(props.data);
      return (
        <> 
        
      {/* IMAGE SECTION OF CARD */}

        <div className="albumCard">
          <div className="albumImage">
            <div className="albumIcons">
              <img
                src="./icons/heart.svg"
                className="icon-heart"
                alt="heart-icon"
              />
              <img
                src="./icons/play.svg"
                className="icon-play"
                alt="play-icon"
              />
              <img
                src="./icons/dots.svg"
                className="icon-dots"
                alt="more-icon"
              />
          </div>

        <Image AlbumImage = {props.data.images[1].url} AlbumLink = {props.data.external_urls.spotify}/>
      </div>

      {/* ALBUM SECTION OF CARD */}

      <AlbumName AlbumLink = {props.data.external_urls.spotify} AlbumName = {props.data.name}/>

      {/* ARTIST SECTION OF CARD */}
        
      <div className="artist">
          {props.data.artists.map((artist, index) => {
              return <a
              key = {artist.id}
              href={artist.external_urls.spotify}>
              <span> {artist.name}
              {artist .length-1>index?', ': ''}</span> 
             </a>
            })
          }
      </div>
    </div>
  </>
  )
}
  
export default Card;