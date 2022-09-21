import React from 'react';


const Artist = (props) => {
 
return (

        <h3>
            {props.ArtistName}
        </h3> 

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

export default Artist;