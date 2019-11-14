import React from 'react';

export const Album = (props) => {
    console.log(props)
    
 return  <div className="albumCard">
    <img src={props.album.images[1].url} alt=""/>
    <h2>{props.album.name}</h2>
    {props.album.artists.map(artist => <p>{artist.name}</p>)}
    </div>
};
