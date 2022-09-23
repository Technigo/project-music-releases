import React from 'react';
//this will print the album name, and also make it to a link to the album in spotify.
const Albumname = (props) => {
    return(
        <a className="linkAlbumname" href={props.urlAlbumname} target="_blank" rel="noopener noreferrer"><h3 className="Albumname">{props.Albumname}</h3></a>
    );
    }

export default Albumname;