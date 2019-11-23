import React from 'react'

export const Album = (props) => {
    return (
        <div className='artistBox'>
            <div className='album-cover'>
                <img className='album-img' src={props.image} alt='Album' />
            </div>
            <div className='album-info'>
                <div className='album-title'>
                    <a href={props.albumUrl}>{props.albumTitle}</a>
                    <div className='artist-name'>
                        {props.artists}
                    </div>
                </div >
            </div >
        </div >
    )
}

