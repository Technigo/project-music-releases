import React, { useState } from 'react'
import Radium from 'radium'
import styles from '../styles'
import AlbumCoverBackground from './AlbumCoverBackground'
import AlbumCoverIcons from './AlbumCoverIcons'

const AlbumCover = (props) => {
  const [hoverBackgroundVisible, setHoverBackgroundVisible] = useState(false)
  const [underline, setUnderline] = useState(false)
  return (
    <div>
      <div style={styles.imgWrapper} onMouseEnter={() => setHoverBackgroundVisible(true)} onMouseLeave={() => setHoverBackgroundVisible(false)}>
        <a href={props.linkAlbum}>
          <img style={styles.img} src={props.image} alt="Album cover"></img>
          {hoverBackgroundVisible && <AlbumCoverBackground />}
          {hoverBackgroundVisible && <AlbumCoverIcons />}
        </a>
      </div>

      <a href={props.linkAlbum} style={styles.linkText}>
        <h2 key={"Album"} style={styles.h2}>{props.name}</h2>
      </a>
      <a href={props.linkArtist} style={styles.linkText}>
        <h3 key={"Artist"} style={styles.h3}>{props.artist}</h3>
      </a>
    </div>
  )
}
export default Radium(AlbumCover)