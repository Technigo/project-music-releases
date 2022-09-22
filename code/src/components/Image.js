import React from 'react';

// named export
export const Image = (props) => {
  console.log(props.data);
    return (
      <>
        <div>
          <img src={props.data.images[1].url} alt={props.data.name}/>
        </div>
      </>
  );
}

