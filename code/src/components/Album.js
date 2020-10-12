import React from "react";
import "album.css";

const Album = () => {
    return (
        <div class="albumContainer">
            <div class="albumInfo">
                <img src={items.images[1].url} alt="album cover" class="albumCover" />
                <div class="icons">
                    <img src="icons/play.svg" alt="play button" class="playIcon" />
                    <img src="icons/heart.svg" alt="like button" class="heartIcon" />
                    <img src="icons/dots.svg" alt="more button" class="dotsIcon" />
                </div>
            </div>
            <div>
                <a href={item.external_urls.spotify} class="title"></a>
            </div>
            <div>
                <a class="artist" href={item.artists[0].external_urls.spotify}>
                    {" "}
                    {item.artists[0].name}
                </a>
            </div>
        </div>
    );
};

export default Album;
