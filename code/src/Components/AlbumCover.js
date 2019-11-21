import React from 'react'
import styles from '../styles'

export const AlbumCover = (props) => (
    <div style={styles.albumCover}>
      <img style={styles.img} src={props.image} alt="Album cover"></img>
     <h2 style={styles.h2}>{props.name}</h2>
     <h3 style={styles.h3}>{props.artist}</h3> 
     </div>
)