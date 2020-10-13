import React from 'react';
// import data from './data.json';

export const Albumimage = props => {
    console.log("We want album image:", props)
    return (
        <img src={props.image} alt="album display"></img> 
    )
}
