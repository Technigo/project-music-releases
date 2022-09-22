import React from 'react';


const Artist = (props) => {
 
return (
    
/* <h3 className="artist-name">
{' '}
<a href ={props.ArtistLink} target="_blank">
{' '}
{props.ArtistName}
</a>
 </h3>  */

<a
    className="artistUrl"
    href={props.ArtistLink}
    target="_blank"
    rel="noopener noreferrer"
>
    {' '}
    <h3>{props.ArtistName}</h3>
</a>






    // /* return (
    //   
    //     {props.data.artists.map((artist, i) => {
    //         let divider = " ";
    //         if (i < props.data.artists.length - 2) {
    //         divider = ", ";
    //         } else if (i === props.data.artists.length - 2) {
    //         divider = " & ";
    //         }})
    //         }) */
          
)}


export default Artist;