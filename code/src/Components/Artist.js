import React from 'react';

const Artist  = (props) => {
  return (
  <>
     <div className="artistName">
        {props.album.map(artist => {
          return (
            <h2 className="artistLink">{artist.name}</h2>
          )
        })}
      </div>
    
    </>
  );
};

export default Artist;