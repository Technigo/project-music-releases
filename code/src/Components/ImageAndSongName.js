import React from 'react';

const ImageAndSongName = (props) => {
    return (
    <div>
        <img src={props.imgUrl}></img>
        <h2>{props.songName}{/* SONG NAME */}</h2>
    </div>
)}

export default ImageAndSongName