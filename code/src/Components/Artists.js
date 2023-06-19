import React from 'react';

// The Artist component //
// exoprt beofre const //
const Artists = (props) => {
  console.log(props);
  return (
    <>
      {props.artists.map((artist) => {
        return <h3>{artist.name}</h3>
      })}
    </>
  )
}
// The Album function is avalible to all the other codes that we write //
export default Artists;
