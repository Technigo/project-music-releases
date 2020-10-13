import React from 'react';

const ImageAndSongName = (props) => {
    return (
    <>
        <img src={props.imgUrl}></img>
        <h2>{props.songName}{/* SONG NAME */}</h2>
    </>
)}

export default ImageAndSongName