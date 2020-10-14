import React from 'react';

export const Albumartistname = props => {
    console.log("We want artist name:", props)
    return (
        <div>{props.name}</div> 
    )
}