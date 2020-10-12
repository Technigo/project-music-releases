import React from "react";

export const Album = (props) => {  
  return (
    <div className="album-card">
        <div className="album-cover">
            <img src={props.imgsrc} alt="" className="album-cover-img"/>
        </div>

      <div>
        <h3>{props.name}</h3>
      </div>
    </div>
  );
};