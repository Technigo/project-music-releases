import React from 'react'
import './Album.css'
// import { Dots } from '../icons/Dots'
import { ReactComponent as DotsIcon } from '../icons/dots.svg'
import { ReactComponent as HeartIcon } from '../icons/heart.svg'
import { ReactComponent as PlayIcon } from '../icons/play.svg'


export const Album = (props) => (
    <div className="albumContainer">
        <div className="albumCover" style={{ backgroundImage: `url(${props.image})` }}>
            <HeartIcon className="heartIcon" />
            <PlayIcon className="playIcon" />
            <DotsIcon className="dotsIcon" />
            {/* <Dots className="dotsIcon" /> */}
        </div>
        <div className="moreDetails">
            <a className="linkAlbumTitle" href={props.urlAlbumTitle}><h1 className="albumTitle">{props.albumTitle}</h1></a>
            <a className="linkArtistName" href={props.urlArtistName}><h3 className="artistName">{props.artistName}</h3></a>
        </div>
    </div>
)

