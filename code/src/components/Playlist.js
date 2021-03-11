import React from 'react'
import data from '../stretch-goal.json'

const Playlist = (props) => {
    return (
      <article key={props.id} className="playlist">
         <h4 className="playlist-title">Popular playlist</h4>

        { data.playlists.items.map(playlists => 
        
        {
          return(
            <a 
            className="playlist-link" 
            href={playlists.external_urls.spotify} 
            key= {props.child}
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