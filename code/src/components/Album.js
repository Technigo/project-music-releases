import React from 'react'
import { Artist } from 'components/Artist'
import { Icons } from 'components/Icons'

export const Album = (props) => {
    const album = props.album

    return (
        <div key={album.id} className='album'> 
            <div className='image-container'>
                <img className='image' src={album.images[0].url} alt="album-img"/>
                <div className='overlay-container'>
                    <Icons
                        url = {album.external_urls.spotify}
                    />
                </div>
            
            </div>
            
            <p className='album-name'><a target='_blank' rel="noopener noreferrer" href={album.external_urls.spotify}>{album.name}</a></p>

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





