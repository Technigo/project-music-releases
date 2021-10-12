import React from "react";

const Album = (props) => {
  return (
    <article className="album-card">
      <img src={props.item.images[0].url} alt="#" />
      <div className="text-wrapper">
        <h2 className="song-title">
          <a href={props.item.external_urls.spotify}>{props.item.name}</a>
        </h2>
        <h3 className="song-artists">
          <a href={props.item.artists[0].external_urls.spotify}>
            {props.item.artists[0].name}
          </a>
        </h3>

        {/* {prop.artists.items.map((items) => (
            <Artists key={items.id} item={items} />
          ))} */}
      </div>
    </article>
  );
};

export default Album;

//
