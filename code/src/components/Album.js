import React from "react";
import "./album.css";
import Artist from "./Artist";
import Icons from "./Icons";

const Album = ({ item }) => {
    return (
        <div className="albumContainer">
            <div className="albumWrapper">
                <img src={item.images[1].url} alt="album cover" className="albumCover" />
                <Icons />
            </div>
            <div>
                <a className="albumTitle" href={item.external_urls.spotify}>{item.name}</a>
            </div>

            <div className="artistTitle">
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