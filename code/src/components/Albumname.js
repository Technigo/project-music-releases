import React from 'react';

/* const Albumname = (props) => {
    console.log(props.album)
    return (
        <h2>{props.album}</h2>
)}

export default Albumname;
 */

const Albumname = (props) => {
    return(
        <a className="linkAlbumname" href={props.urlAlbumname} target="_blank" rel="noopener noreferrer"><h3 className="Albumname">{props.Albumname}</h3></a>
    );
    }

export default Albumname;