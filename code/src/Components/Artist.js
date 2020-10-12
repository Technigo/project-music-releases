import React from 'react';

export const Artist = (props) => {
    return <div className="artist">
        <a href={props.artistUrl} className="artistTitle"><p>{props.name}</p></a>

    </div>

};
//komma separera artister.