import React from "react";
import "./album.css";
import Artist from "./Artist"

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

            <div className="artist">
                {item.artists.map(item => {
                    return (
                        < Artist key={item.id} item={item} />
                    )
                })}

            </div>
        </div>
    );
};

export default Album;


/* <div className="artist">
    {item.artists.map(item => {
        return (
            < Artist key={item.id} item={item} />
        )
    })}

</div>
</div >
);
}; */