import React, {useState} from 'react'
import styles from '../styles'
import AlbumCoverBackground from './AlbumCoverBackground'
import AlbumCoverIcons from './AlbumCoverIcons'

export const AlbumCover = (props) => {
  const [hoverBackgroundVisible, setHoverBackgroundVisible] = useState(false)
  return (
    <div style={styles.albumCover}>
      <div style={styles.imgWrapper} onMouseEnter={() => setHoverBackgroundVisible(true)} onMouseLeave={() => setHoverBackgroundVisible(false)}>
        <img style={styles.img} src={props.image} alt="Album cover"></img>
        {hoverBackgroundVisible && <AlbumCoverBackground/>}
        {hoverBackgroundVisible && <AlbumCoverIcons/>}
      </div>
     <h2 style={styles.h2}>{props.name}</h2>
     <h3 style={styles.h3}>{props.artist}</h3>
     </div>
)}