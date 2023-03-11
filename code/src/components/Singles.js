import React from 'react';
import SinglesDetails from './SinglesDetails';

const Singles = (props) => {
  return (
    <div className="singles-container">
      {props.singlesData.albums.items.map((eachSingle) => {
        if (eachSingle.album_type === 'single') {
          return (
            <SinglesDetails key={eachSingle.id} singleInfo={eachSingle} />
          )
        } else {
          return (null)
        }
      })}
    </div>
  )
};

export default Singles; /* If you only have one function to export, use "export default" */