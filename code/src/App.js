import React from 'react'
import data from './data.json'
import AlbumCover from "./Components/AlbumCover"
import styles from './styles'
import Radium from 'radium'

console.log(data)

const App = () => (
  <div style={styles.wrapper}>
    <h1 style={styles.h1}>New albums and singles</h1>
    <div style={styles.flex("space-between")}>
      {data.albums.items.map(album => (
        <div key={album.id} style={styles.albumCoverWrapper}>
          <AlbumCover
            image={album.images[1].url}
            name={album.name}
            artist={album.artists[0].name}
            linkAlbum={album.external_urls.spotify}
            linkArtist={album.artists[0].external_urls.spotify}
          />
        </div>
      ))}
    </div>
  </div>
)


export default Radium(App)

// Responsive, showing 4 on desktop, 2 on tablet, and 1 on mobile ?