import React from 'react';
const Album = ({coverImage, albumUrl, albumName}) => { //needs to be the same as in app file
console.log('image', coverImage);
console.log('name', albumName);
return (
  <div className="albumWrapper">
  <div className="imageWrapper">
  <img className="albumImage" src={coverImage} alt="album cover" />
  </div>
  <h2 className="albumName">
    <a href={albumUrl}>{albumName}</a>
  </h2>
</div>
);
};

export default Album;