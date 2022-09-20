import React from 'react';
import Icons from './Icons';

const Covers = (props) => {
   
  return (
    <>
    {/* <Icons artistLink = {props.data.external_urls.spotify} /> */}
      
    <img className="image-container" src={props.artistImage} /> 
   </>
  );
}
 
export default Covers