import React from 'react';

//receiving props from the Article.js
export const Artist = (props) => {
  //rendering artist url and name for each album in this component

  // react fragment <> </> which are transparent tags, bc you can only have 1 mother container.
  return (
    <>
      {/* creating conditions for rending artist with comma and & */}
      {(() => {
        if (props.totalArtist === 2 && props.index === 0) {
          return (
            <a
              className="artistUrl"
              href={props.artistUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              {props.artistName} {''}
            </a>
          );
        } else if (props.totalArtist === 2 && props.index === 1) {
          return (
            <a
              className="artistUrl"
              href={props.artistUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              & {props.artistName}
            </a>
          );
        } else if (
          props.totalArtist > 2 &&
          props.index !== props.totalArtist - 1
        ) {
          return (
            <a
              className="artistUrl"
              href={props.artistUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              {props.artistName},{''}
            </a>
          );
        } else if (
          props.totalArtist > 2 &&
          props.index === props.totalArtist - 1
        ) {
          return (
            <a
              className="artistUrl"
              href={props.artistUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {''} & {props.artistName}
            </a>
          );
        } else {
          return (
            <a
              className="artistUrl"
              href={props.artistUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              {props.artistName}
            </a>
          );
        }
      })()}
    </>
  );
};
