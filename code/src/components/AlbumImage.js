import React from 'react'


const AlbumImage = (props) =>{
    return(
        <div className="image-wrapper">
            <img src={props.item.images[1].url} alt={props.item.name} className="responsive-image album-image" />
            <div className="all-icons">
                <img src="/icons/heart.svg" alt="icon heart" className="icon-heart"/>
                <img src="/icons/play.svg" alt="icon play" className="icon-play"/>
                <img src="/icons/dots.svg" alt="icon play" className="icon-dots"/>
            </div>
        </div>
    )
}

export default AlbumImage