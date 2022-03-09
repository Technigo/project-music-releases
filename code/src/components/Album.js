import React from 'react'
import { Artist } from 'components/Artist'

export const Album = (props) => {
    const album = props.album

    return (
        <div key={album.id} className='album'> 
            <img src={album.images[0].url} alt="album-img"/>
            
            <p className='album-name'><a href={album.external_urls.spotify}>{album.name}</a></p>

            <div className='artist-container'>
                {album.artists.map((artist, index, array) => 
                    <Artist
                        artist = {artist}
                        index = {index}
                        length = {array.length}
                    />
                )}
            </div>
        </div>
    )
   
}





