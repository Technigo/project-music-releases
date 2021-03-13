import React from 'react'
import AlbumArt from './AlbumArt'
import Artist from './Artist'

const AlbumWrapper = (props) => {
    
    return (
        
        <div className="album">
            
            <AlbumArt 
                image={props.image}
                albumUrl={props.albumUrl}
            />
            
            <div className="albumName">
                <a href={props.albumUrl}>{props.albumName}</a>
            </div>

            <div className="artistsWrapper">
                
                {props.artists.map((artist, index) => {
                
                    return <Artist 
                        artist={artist}
                        allArtists={props.artists}
                        index={index}
                        key={props.albumUrl+"_"+index}
                    />    

                })}

            </div>

        </div>
    )
}

export default AlbumWrapper;