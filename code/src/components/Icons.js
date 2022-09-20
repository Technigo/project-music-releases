import React from 'react';


const Icons = (props) => {
   
  return (
    <>
    <div className='icons'>      
      <img src='icons/heart.svg'/>
      <a href={props.artistLink}>
        <img src='icons/play.svg'/>
      </a>
      <img src='icons/dots.svg'/>
    </div>
    </>
  );
}
 
export default Icons

/* <img src='project-music-releases/code/public/icons/heart.svg'/> */