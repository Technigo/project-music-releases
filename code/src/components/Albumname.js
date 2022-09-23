import React from 'react';

const Albumname = (props) => {
    return(
        <a className="linkAlbumname" href={props.urlAlbumname} target="_blank" rel="noopener noreferrer"><h3 className="Albumname">{props.Albumname}</h3></a>
    );
    }

export default Albumname;