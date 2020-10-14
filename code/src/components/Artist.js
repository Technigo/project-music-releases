import React from 'react';
import './Artist.css'

export const Artist = (props) => { 
    return (
      <div>
        <a href= {props.link} target="_blank">
        <p>{props.name}</p>
        </a>
      </div>
    )
}