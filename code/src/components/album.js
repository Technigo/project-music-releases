import React from 'react';
import '../index.css';

const Album = (props) => {
  console.log('album', props)
  return (
    <div>
      {props.name}
    </div>
  );
};
export default Album;