import React from "react";

const Artists = (props) => {
  return (
    <>
      <div>
        <h2 className="song-title">{props.item.name}</h2>
        <h3 className="song-artists">{props.item.artists.name}</h3>
      </div>
    </>
  );
};

// export default Artists;
