import React from 'react';

export const Artist = (props) => {
    return <div className="artist">
        <p>Artist Name: {props.name}</p>
        <p>Artist URL: {props.artistUrl}</p>
    </div>

};
