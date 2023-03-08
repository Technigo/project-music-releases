import React from 'react';

export const AlbumImages = (props) => {
  return (
    <div>
      {props.imagesInput.map((image) => {
        return <div>{image.url}</div>;
      })}
    </div>
  );
};
