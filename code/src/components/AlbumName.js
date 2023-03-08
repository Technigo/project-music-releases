import React from 'react';

// import styles from './Album.module.css';
// I fixed it by changing the name from "HeaderStyling.css" to "HeaderStyling.module.css everywhere

export const AlbumName = (props) => {
    return (
      <div>
        <h1 className={album-name}></h1>
      </div>
    )
  };

// {props.artistDetails.albums.items.name}

  
  import React from 'react'

export const AlbumName = (props) => {

  return (
      <h2 className='album-name'>
        <span className='underline'>
        {props.item.name} 
        </span>
      </h2>
 )

}