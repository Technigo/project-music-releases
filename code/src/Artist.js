import React from 'react';

const Artist = (props) => {
    //console.log(props);
    return (
        <a href={props.artist.map(artist => artist.external_urls.spotify)} className="artist">
            {props.artist.map(artist => artist.name).join(', ')}
        </a>
       )
    };

export default Artist;