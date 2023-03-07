/* eslint-disable linebreak-style */
import React from 'react';
import { AlbumArtist } from './AlbumArtist'

export const AlbumCard = (props) => {
    const imgSrc = props.albums.images[0];

    return (
        <div className="album-container">
            <div className={styles.imgContainer}>
                <img className={styles.coverImg} src={imgSrc.url} alt="coverImage" />
                <Icons url={props.album.external_urls.spotify} />
        </div>
<a
href={props.album.external_urls.spotify}
target="_blank"
rel="noreferrer"
>
<h1 className={styles.albumTitle}>{props.album.name}</h1>   
</a>
<Artists artists={props.album.artists} />
</div>


// export const AlbumCard = () => {
//   return ()