import React from 'react'

const Artist = (props) => {
  
  if(props.allArtists.length === 1) {
    
    return (
      <div className="artist">
        <a href={props.artist.external_urls.spotify}>
          {props.artist.name}
        </a>
      </div>
    )

  } else if(props.index === props.allArtists.length-1) {
    
    return (
      <div className="artist">
        <a href={props.artist.external_urls.spotify}>{props.artist.name}
        </a>
      </div>
    )
    
  } else if(props.index === props.allArtists.length-2) {
      
    return (
      <div className="artist">
        <a href={props.artist.external_urls.spotify}>{props.artist.name}
        </a>
        <span>
          &nbsp;&&nbsp;
        </span>
      </div>
    )
  
  } else {
    
    return (
      <div className="artist">
        <a href={props.artist.external_urls.spotify}>{props.artist.name}
        </a>
        <span>
          ,&nbsp;
        </span>
      </div>
    )
    
  }
}

export default Artist;
    
    
  