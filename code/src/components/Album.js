import React from "react";
import Icons from "./Icons";

{/* Album components  */ }


const Album = (props) => {
  return (

    <article className="album-cards">
      <a
        className="image-container"
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {/*Essentially, adding rel="noopener noreferrer" to links protects your site's users against having the site you've linked to potentially hijacking the browser*/}

        {" "}
        <img
          className="album-image"
          src={props.image.url}
          alt="image of album"
        ></img>
        <Icons />
      </a>

      <a
        className="album-text"
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.name}
      </a>

      <div className="artist-text-container">
        {props.artists.map((artist) => {       {/* Here we render artists */}
          return (
            <span className="inner-artist-container">
              <a
                className="artist-text"
                href={artist.external_urls.spotify}
                target="_blank"
                rel="noopener noreferrer"
              >
                {artist.name}
              </a>
            </span>
          );
        })}
      </div>
    </article>
  );
};

// Links
// https://stackoverflow.com/c/technigo/questions/285
// https://stackoverflow.com/c/technigo/questions/869
// https://stackoverflow.com/c/technigo/questions/301/302#302
// https://www.notion.so/Week-9-Music-releases-review-34baf8a0a22e466085dae9ad52d66f24

// https://stackoverflow.com/c/technigo/questions/2243
// https://stackoverflow.com/c/technigo/questions/1671

export default Album;
