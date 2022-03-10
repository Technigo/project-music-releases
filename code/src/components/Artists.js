import React from 'react';

const Artists = (props) => {
    return (
    <a href={props.url}> 
    <h1 className="artist-name">{props.name}{props.isLast ? "" : ","}</h1>
    </a>)
}

export default Artists;