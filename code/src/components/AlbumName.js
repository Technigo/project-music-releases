import React from 'react';


const AlbumName = (props) => {
 
return (
    
<h2>
    {props.AlbumName}
    {props.AlbumLink}
</h2>
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