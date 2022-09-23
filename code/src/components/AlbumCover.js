import React from 'react';

import PhotoAlbum from "react-photo-album"; //I downloaded these, not sure if needed for album effect : npm install react-photo-album or yarn add react-photo-album


export const AlbumCover = (props) => {
    
    return (
           <a 
              href={props.AlbumCover} 
              target= "_blank" 
              rel="noopener noreferrer"
            >
              <img 
                className="AlbumCover" 
                src={props.image} 
                alt={props.name}
              />
            </a>
    )
}

