import React from 'react';
import Artist from './Artist'
import Image from './Image'
import AlbumName from './AlbumName'

const Card = (props) => {
    console.log(props.data);
    return (
<> 
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


<AlbumName AlbumLink = {props.data.external_urls.spotify} AlbumName = {props.data.name}/>

{props.data.artists.map((artist) => {
    return(<Artist ArtistLink = {artist.external_urls.spotify} ArtistName = {artist.name} key = {artist.id}
    />)
    // <span>{props.item.artists.length-1>index?', ': ''}</span> 
  })
}

</div>
</>

    );
}
   
export default Card;