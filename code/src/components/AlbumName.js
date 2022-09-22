import React from 'react';


const AlbumName = (props) => {
 


return (   
    <a
        className="albumUrl"
        href={props.AlbumLink}
        target="_blank"
        rel="noopener noreferrer"
    >
        {' '}
        <h2>{props.AlbumName}</h2>
    </a>
    
    /* return (
        {props.data.artists.map((artist, i) => {
            let divider = " ";
            if (i < props.data.artists.length - 2) {
            divider = ", ";
            } else if (i === props.data.artists.length - 2) {
            divider = " & ";
            }})
            }) */
)}

export default AlbumName;