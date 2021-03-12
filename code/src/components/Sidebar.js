import React from "react";

export const Sidebar = (props) => {
  return (
    <>
      <ul>
        <li>
          <a href={props.link}>{props.list}</a>
          <p> Total tracks: {props.tracks}</p>
        </li>
      </ul>
    </>
  );
};
