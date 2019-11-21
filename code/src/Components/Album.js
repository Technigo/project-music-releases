import React from "react";
// import "./album.css";

// return <div>album: {props.name}</div>;
// const { data } = props;

// export const Album = props => {
//   return (
//     <div>
//       {props.id}
//       <img src={props.image} alt="Album images"></img>
//       <h4> {props.name}</h4>
//     </div>
//   );
// };
export const Album = props => {
  return (
    <div>
      <img src={props.image} alt="Album images" />
      <a href={props.url} target="_blank">
        <h4>{props.name}</h4>
      </a>
    </div>
  );
};
