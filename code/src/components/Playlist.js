import React from 'react'
import data from '../stretch-goal.json'



const Playlist = () => {
  console.log(data.playlists.items[0].external_urls.spotify)
  console.log(data.playlists.items[2].name)
    return (
      <article className="playlist">
         <h4 class="playlist-title">Popular playlist</h4>
        {data.playlists.items.map(playlists => {
          return(
            <a className="playlist-link" href={playlists.external_urls.spotify} rel="noopener noreferrer">
              <p className="playlist-content">{playlists.name}</p>
            </a>
          )

        })}

      </article>
    )

}

export default Playlist