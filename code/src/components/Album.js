import React from 'react'

const Album = (props) => {
    return (
        <div className="cards" >
            {props.album.map((album) => {
            return (
                <>
                <a href={album.external_urls.spotify} key={album.id} className="album-img">
                    <div>
                    <img src={album.images[0].url}  className="image-wrapper" alt="album image"></img>
                     <div className="all-icons">
                       <img src="./public/icons/heart.svg" alt="icon heart" className="icon-heart"/>
                       <img src="./public/icons/play.svg" alt="icon play" className="icon-play"/>
                       <img src="./public/icons/dots.svg" alt="icon play" className="icon-dots"/>
                    </div>
                    </div>
                    <h5 className="artist-name">
                     {album.name}
                    </h5>
                </a>
                </>
            )
            })}
        </div>
    )
}

export default Album 