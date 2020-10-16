import React from 'react';

const Artist = (props) => {
  return (
    <>
      {/* p-tag with prop containing all available 
      artists for each album */}
      <p className="artist-name">{props.names} </p>
    </>
  );
};

export default Artist;
