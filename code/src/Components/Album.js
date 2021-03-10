import React from 'react'

//image needs an URL
const Album = (props) => {
    return (
      <div className="album">
        <img src={props.imgsrc}></img>
        <p>{props.name}</p>
        
      </div>
    );
  }

  export default Album