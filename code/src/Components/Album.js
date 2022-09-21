import React from 'react';
import Artist from './Artist'

const Album = (props) => {
    console.log(props.data)
  
    return (
    <>
    <h2>
      {props.data.name}
    </h2>
    <h3>
     <Artist/>
    </h3>
    </>
  );
}

export default Album;