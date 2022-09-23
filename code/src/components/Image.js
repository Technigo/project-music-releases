import React from 'react';
import { Buttons } from './Buttons';

// named export
export const Image = (props) => {
  console.log(props.data);
    return (
      <>
        <div className="project-image">
          <div className="project-image-overlay"></div>
          <img className='picture' src={props.data.images[1].url} alt={props.data.name}/>
          <Buttons /> 
        </div>
      </>
  );
}

