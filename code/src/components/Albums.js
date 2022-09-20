//daniels kod
import React from "react";
import Artists from "./Artists";

const Albums = (props) => {
  console.log(props.data);
  return (
    <>
      <h2>{props.data.name}</h2>
      <Artists artistsName={props.data.images} />
    </>
  );
};

export default Albums;

//Jag här försöker jag, men koden från daniel, få in artistnamn från APIn
//Men lyckas ej. Jag har funderat på om något i App.js måste läggas till eller
//om det är något annat som jag missat. För det går att ta data från "fliken" item
