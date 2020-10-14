import React from 'react'
import { AlbumCard } from './AlbumCard'


export const AlbumContainer = props => {
    const { albums } = props
console.log('albums', albums)

return (
    <article className='album-container'>
        {albums.map(album => {
            return (
                <AlbumCard 
                    key={album.id} 
                    title={album.name} 
                    artists={album.artists}
                />
            )
        })}
    </article>
)

    }

 // // News exempel titel, url, urlToimage


// // Vi vill ha dessa
// // header?
// // albumCover
// // albumName
// // artistName


