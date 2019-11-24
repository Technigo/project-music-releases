import React from 'react'
import { Icons } from "components/Icons"

export const Album = (props) => {
    return (
        <div className='artistBox'>
            <div className='album-cover'>
                <img className='album-img' src={props.image} alt='Album' />
                <Icons />
            </div>
            <div className='album-info'>
                <div className='album-title'>
                    <a href={props.albumUrl}>{props.albumTitle}</a>
                    <div className='artist-name'>
                        <a href={props.urlArtistName}>{props.artists}</a>
                    </div>
                </div >
            </div >
        </div >
    )
}

