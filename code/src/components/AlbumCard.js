import React from 'react'
// import { Button } from './Button'
// // import {PlayButton} from 'icons/play'
// import './album.css'


export const AlbumCard = props => {
    const { albums } = props

return (
    <article className='album'>
        {albums.map(album => {
            return (
                <div> 
                   <h2>{album.name}</h2> 
                </div>
            )
        })}
    <h1>Title</h1>
    {/* <Button></Button> */}
    <p>LLdlksafljlfjgfgkh</p>
    </article>
)

    }

 // // News exempel titel, url, urlToimage


// // Vi vill ha dessa
// // header?
// // albumCover
// // albumName
// // artistName


