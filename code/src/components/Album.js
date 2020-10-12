import React from "react";

export const Album = (props) => {
  
  return (
    <div className="album-card">
      <div>
        <h3>{props.name}</h3>
      </div>
    </div>
  )
}