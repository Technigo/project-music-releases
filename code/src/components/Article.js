import React from 'react';


const Article = (props) =>{
    console.log(props);
    return (
        <article className="article-container">
        
          <div className = "image-container">

          <div className = "overlay">
                <img  className= "icon-heart"src="./icons/heart.svg" alt="heart icon"/>
                
                <div>
                  <a href={props.playIconURL}><img className="icon-play" src="icons/play.svg" alt="play icon" /></a>
                </div>
                <img  className= "icon-dots"src="./icons/dots.svg" alt="dots icon" />

              
          </div>

          <img
              className="album-cover"
              src={props.albumCover}
              />

        </div>

        <div className="album-info">

          <div className ="album-title"> 
         
            <h2><a href={props.albumLink}>{props.albumTitle}</a></h2>
         
          </div>
      
          <div className="artist">

                
             {props.artists.map((artist) => {

              return (<div url={artist.external_urls.spotify}>
              <a href={artist.external_urls.spotify}>{artist.name}</a>
       
        
        </div>)

})}

          </div>
        </div>
      </article>
	);
};


export default Article;