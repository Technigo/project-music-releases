 import React from 'react';

 //console.log(data.albums.items[0].artists[0].name)


 const Album = (props) => {
   //console.log('aleksa', props);
   
   return (
     <article className="album-item">
       <div className="cover-image-container">
        <img className="cover-image" src={props.image}></img>
          <div className="middle">
          <img className="svg"
            src='./icons/heart.svg'
            width='20'
            height='20'
            alt='heart icon'
          />
          <img className="svg"
            src='./icons/play.svg'
            width='50'
            height='50'
            alt='play button icon'
          />
          <img className="svg"
            src='./icons/dots.svg'
            width='20'
            height='20'
            alt='ellipsis icon'
          />
          </div>
        </div>
        <a className="album-name" href={props.link}>
        {props.title}
        </a>
       <div className="artist-name">
         {props.singer}
       </div>
     </article>
     
    
   );
 };
 

 export default Album;
