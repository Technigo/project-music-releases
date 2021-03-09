import React from 'react'

const AlbumCover = (props) => {
    return (
      <div className="AlbumCover">
        <img src={props.imgsrc}></img>
      </div>
    );
  }

  export default AlbumCover