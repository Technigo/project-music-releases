import React from 'react';
// props => name/ url 
// prop.name => artist name
// prop.url => artis url
//javascript Template literals 
const Artists = (props) => {
    return (
    <a href={props.url}> 
    <h1 className="artist-name">{props.name}{props.isLast ? "" : ","}</h1>
    </a>)
}

export default Artists;