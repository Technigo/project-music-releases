import React from 'react'
import data from './data.json'
import {AlbumCover} from "./Components/AlbumCover"
import styles from './styles'


console.log(data)

export const App = () => (
  <div style={styles.wrapper}>
  <h1 style={styles.h1}>New albums and singles</h1>
  <div style={styles.flex}>
    {data.albums.items.map(album => (
      <div key={album.id} style={styles.albumCoverWrapper}>
      <AlbumCover
      image={album.images[1].url}
      name={album.name}
      artist={album.artists[0].name}
      />
      </div>
    ))}
  </div>
  </div>
  )
  


