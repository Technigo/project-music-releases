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
                className="cover" 
                src={props.image} 
                alt={props.name}
              />
            </a>
    )
}


/* <a href={props.url} target="_blank" rel="noreferrer noopener"> </a>testiiiiiiii
href={props.urlAlbum} 
target= "_blank" 
rel="noopener noreferrer

</a>*/