import React from 'react';

// named export
const Image = (props) => {
  console.log(props.data);
    return (
      <>
        <div>
          {props.data.images[1].url}
        </div>
      </>
  );
}

export default Image;