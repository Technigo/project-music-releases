import React from "react";


export const Album = (props) => {
  return (
    <>
      <img src={props.img[2].url} alt="Album cover" />
      <p>
        {props.name}
      </p>
      <p>
        {props.artists}.map((artist) => {
          return <Album key={album.name} name={album.name} img={album.images} artists={album.artists} />

        })
      </p>
    </>
  );

}