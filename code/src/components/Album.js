import React from "react";
import "./album.css";

const Album = ({ item }) => {
    return (
        <div className="albumContainer">
            <div className="albumInfo">
                <img src={item.images[1].url} alt="album cover" className="albumCover" />
                <div className="icons">
                    <img src="icons/heart.svg" alt="like button" className="heartIcon" />
                    <img src="icons/play.svg" alt="play button" className="playIcon" />
                    <img src="icons/dots.svg" alt="more button" className="dotsIcon" />
                </div>
            </div>
            <div>
                <a href={item.external_urls.spotify} className="title"></a>
            </div>
            <div>
                <a className="artist" href={item.artists[0].external_urls.spotify}>
                    {" "}
                    {item.name}
                </a>
            </div>
        </div>
    );
};

export default Album;