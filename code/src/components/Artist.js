import React from 'react';

export const Artist = (props) => {
   
          if (props.index === 0) {
            return (
            <a className="artist-name" href={props.artistUrl}>{props.artistName}</a>
            )
          } else if (props.index === props.length - 1) {
            return (
              <a className="artist-name" href={props.artistUrl}>{'\u00A0& ' + props.artistName}</a>
            )
          } else {
            return (
              <a className="artist-name" href={props.artistUrl}>{ ', ' + props.artistName}</a>
            )
          }
};