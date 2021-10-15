import React from "react";

export const Artist = (props) => {
  const generateDelimiter = (index, length) => {
    if (index === length - 2) {
      return " & ";
    } else if (index < length - 2) {
      return ", ";
    }
  };

  return (
    <>
      {props.artistList.map((item, index) => {
        return (
          <a
            href={item.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="artist-container"
          >
            <span className="artist-name">{item.name}</span>
            {generateDelimiter(index, props.artistList.length)}
          </a>
        );
      })}
    </>
  );
};
