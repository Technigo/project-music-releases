import React from 'react'
import data from '../stretch-goal.json'

const Playlist = () => {
    return (
      <article className="playlist">
         <h4 className="playlist-title">Popular playlist</h4>

        { data.playlists.items.map(playlists => 
        
        {
          return(
            <a 
            className="playlist-link" 
            href={playlists.external_urls.spotify} 
            rel="noopener noreferrer"
            >
              <p className="playlist-content">{playlists.name}</p>
            </a>
          )

        })
        
      }
      </article>
    )
}

export default Playlist