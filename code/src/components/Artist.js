import React from "react";

const Artist = (props) => {
  const artistData = data.albums.items.artists;
  console.log(artistData);

  return (
    <div className="container">
      {artistData.map((popstar) => {
        return (
          <h2>
            key={popstar.id} artist={popstar.name}
          </h2>
        );
      })}
    </div>
  );
};

// export default Artist;
