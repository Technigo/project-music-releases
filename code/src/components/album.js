import React from 'react';

const Album = ({ albums, name }) => (
  <div>
    <p>{albums}</p>
    <p>{name}</p>
  </div>
);

export default Album;