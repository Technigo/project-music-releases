import React, { useState } from 'react'
import styles from '../styles'
import Dots from '../icons/dots.svg'
import Heart from '../icons/heart.svg'
import Play from '../icons/play.svg'


const AlbumCoverIcons = (props) => {
  const [playScale, setPlayScale] = useState(false)
  return (
    <div style={styles.hoverPlay}>
      <div style={styles.flex("space-evenly")}>
        <img src={Heart} style={styles.iconImg} alt='heart' />
        <img src={Play} style={styles.playImg(playScale)} onMouseEnter={() => setPlayScale(true)} onMouseLeave={() => setPlayScale(false)} alt='play' />
        <img src={Dots} style={styles.iconImg} alt='more' />
      </div>
    </div>
  )
}

export default AlbumCoverIcons
