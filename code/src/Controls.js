import React from "react";
import { Dots } from "./Dots";
import "./css/controls.css";

export const Controls = props => {
  return (
    <div
      className="album-controls"
      // style={{
      //   position: "absolute",
      //   top: 0,
      //   right: 0,
      //   left: 0,
      //   bottom: 0,
      //   backgroundColor: "rgba(0,0,0,.5)",
      //   display: "flex",
      //   alignItems: "center",
      //   justifyContent: "center"
      // }}
    >
      <Dots />
    </div>
  );
};
