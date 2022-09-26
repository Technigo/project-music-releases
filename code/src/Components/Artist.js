import React from 'react';

const Artist  = (props) => {
  return (
  <>
     <div className="artistName">
        {props.album.map(artist => {
          return (
            <a href={props.href} target="_blank">
            <h3 className="artistLink"> {artist.name} </h3>
            </a>
          )
        })}
      </div>
    
    </>
  );
};

export default Artist;