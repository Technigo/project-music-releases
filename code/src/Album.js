import React from "react";

//props are passed into components like arguments are into function
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