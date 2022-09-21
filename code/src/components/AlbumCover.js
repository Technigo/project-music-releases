import React from 'react';
import PhotoAlbum from "react-photo-album"; //I downloaded these, not sure if needed for album effect : npm install react-photo-album or yarn add react-photo-album
import data from './data.json';


 //started this checked out options for how to inject <PhotoAlbum layout="rows" photos={photo} /> 
export const AlbumCover = (props) {        // not sure if needed example: alt={props.user.name}
    return (
      <img className="Album-Cover"
        src={props.items.images}
      />
    );
  }



