import React from 'react';
import Icons from './Icons';

const Image = (props) => {
  return (
    
    <div className="image-container"> 
             
    <img className="album-image" src={props.imgsrc}></img>  
           
  <Icons />
</div> 
  );
}

export default Image;