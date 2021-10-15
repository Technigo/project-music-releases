import React from "react";

const Artists = (props) => {
  console.log(props)
  if(props.artists.length === 1) {
    return (<p key={props.artists[0].id}>{props.artists[0].name}</p>)
  }

  else {
    return ( <p key={props.artists[0].id}>
        {console.log(props.artists.splice(0, props.artists.length - 2))}
        {props.artists.splice(0, props.artists.length - 2).map((artist) => (
          <>{artist.name}, </>
        ))}
        {props.artists[0].name} & {props.artists[1].name}
      </p>)
  }
}

export default Artists