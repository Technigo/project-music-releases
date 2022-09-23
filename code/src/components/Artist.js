import React from "react";

const Artist = (props) => {
  return (
    <a className="title-links" href={props.artistLink} target="_blank">
      <h3 className="artist-name">{props.artistName}</h3>
    </a>
  );
};

{
  /* <div className="artist">
  {props.articleDetails.artists.map((eachartist) => {
    return (
      <a
        href={eachartist.external_urls.spotify}
        target="_blank"
        rel="noopener noreferrer"
        className="artist"
        key={eachartist.id}
      >
        {eachartist.name}{" "}
      </a>
    );
  })}
</div>; */
}

export default Artist;
