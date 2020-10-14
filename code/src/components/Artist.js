import React from "react";
import "./artist.css"

const Artist = ({ item }) => {
    return (
        <a className="artistTitle" href={item.external_urls.spotify}> {item.name}</a>
    )
}
export default Artist;