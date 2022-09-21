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
<Image AlbumImage = {props.data.images[1].url}/>
</div>
<h2>
    {props.data.name}
</h2>
<Artist ArtistName = {props.data.artists[0].name}/>

</div>
</>

    );
}
   
export default Card;