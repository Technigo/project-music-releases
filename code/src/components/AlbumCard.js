import React from "react";
// import Album Cover
import {AlbumCover} from "./AlbumCover";
// import Album Tite
// import Album Artist
 

//const AlbumCard = (props)

export const AlbumCard = () => {
  return (
    <section className="card-container">
        <AlbumCover/>

        <div className="album-artist-container">
            {/* {people.map((person/array) => {
                return <Person
                key={person.name}
                title={peson.title}/>)
            })} */}
        </div>

{/* /* components
                AlbumCover
                    AlbumCard hover
                AlbumTitle
                    AlbumTitle Hover
                ArtistName (separated with ,)
                    AlbumName Hover */ */}
    </section>
  );
};
