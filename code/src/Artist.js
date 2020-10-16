import React from 'react';
import './artist.css'

export const Artist = (props) => {
   
          if (props.index === 0) {
            console.log("if")
            return (
            <a className="artist-name" href={props.artistUrl} target="_blank">{props.artistName}</a>
            )
          } else if (props.index === props.length - 1) {
            console.log("elseif")
            return (
              <a className="artist-name" href={props.artistUrl} target="_blank">{'\u00A0& ' + props.artistName}</a>
            )
          } else {
            console.log("else")
            return (
              <a className="artist-name" href={props.artistUrl} target="_blank">{ ', ' + props.artistName}</a>
            )
          }
          
  
};