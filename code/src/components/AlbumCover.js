import React from 'react';

const AlbumCover = (props) => {
        console.log(props.data);
  return (
      <div>
        <img src={data.albums.items[0].images[0].url} />
      </div>
      
  );
}

export default AlbumCover;