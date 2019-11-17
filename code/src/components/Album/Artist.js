import React from 'react';

export const Artist = ({ data }) => {
  return (
    <div className="album-artist">
      <a href={data.uri}>{data.name}</a>
    </div>
  );
};
