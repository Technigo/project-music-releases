import React from 'react';

export const Artist = ({ data }) => {
  return (
    <div className="album-artist">
      <a href={data.external_urls.spotify}>{data.name}</a>
    </div>
  );
};
