import React from 'react'
import { Album } from "components/Album";



export const AlbumList = (props) => {
    return (
        <section className='album-container'>
            {props.articlesList.albums.items.map((album) => { 
            return <Album key={album.id} albumDetails={album} />;
            })}
        </section>
    )
}