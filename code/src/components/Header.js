import React from "react";

const Header = (props) => {
  <div>
    {props.artists.map((artist) => {
      return <p key={artist.name}>{artist.name}</p>
    })}
  </div>
}

export default Header