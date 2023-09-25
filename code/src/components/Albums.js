import React from "react";
import Artist from "./Artist";
import Icons from "./Icons";
import "../album.css";

// const Albums function = Defining the functional component Albums that takes in a props object.
// <img>-content= Creating an img element with the album cover image as the source,
// and a class name of 'albumCover'.
// <a>-content = Creating an anchor element with the album name as the text content,
// and a class name of 'albumName'.
// <Artist js-mount = Creating an instance of the Artist component and passing in the
// artists array as a prop.

const Albums = (props) => {
  return (
    <div className="album">
      <div className="cover-and-icons">
        <img
          src={props.data.images[1].url}
          className="album-cover"
          alt={props.data.name}
        />
        <div className="icons">
          <Icons />
        </div>
      </div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={props.data.external_urls.spotify}
        key={props.data.id}
        className="album-name"
      >
        {props.data.name}
      </a>
      <Artist artists={props.data.artists} />
    </div>
  );
};

export default Albums;
