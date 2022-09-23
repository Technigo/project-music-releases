import React from 'react';

/*Const Album innehåller:
- Album cover (bild)
- Album name
- Artist name
- Och ikonerna


------Div album-card------
Div album-cover: 
- album cover (bild)
- ikonerna ovanpå bilden

Div album-artists:
- Namnet på artisterna + länk till spotify

*/


export const Album = (props) => {
  return (
    <div className="album-card">
      <div className="album-cover">
         <div className="icons">
          <img className="btn-heart" src="icons/heart.png" alt="" />
          <img className="btn-play" src="icons/play.png" alt="" />
          <img className="btn-dots" src="icons/dots.png" alt="" /> 
        </div> 

        <a href={props.albumurl} className="album-img-hover" target="_blank" rel="noopener noreferrer">
          <img src={props.imgsrc} alt="" className="album-cover-img" />
        </a>
      </div>

      <div>
        <h3>{props.name}</h3>
      </div>

      <div className="album-artists">
        {props.artists.map((artist) => {
          return <a
            key={artist.id}
            className="artists-link"
            href={artist.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer">
            {artist.name}
            <span>,&nbsp;</span>
          </a>
        })}
      </div>
    </div>
  );
};


/* We do a .map on artists to be able to get all the artists names who
are involved, since the names are inside an array of objects */

/* rel="noopener noreferrer" is added to the a linking elements, got
a warning that not adding this rel would be a security risk */

/* <span>,&nbsp;</span> is an HTML entity no break space: this span
will add a comma and a non-breaking line space, in order to keep the artists
names in the same line. We hide the comma in the last name via CSS:
https://stackoverflow.com/questions/18753828/keeping-a-string-of-text-together-on-one-line */





/*export const Album = (props) => {
  return (
    <>
  <div className="AlbumCover">
    <img 
    src={props.data.images[1].url}
    className="album-cover"
    alt={props.data.name} 
    />
      
      <AlbumName album ={props.data.name} />
     < Artist artists= {props.data.artists} />


    </div>
    </>
  );
};
*/


export default Album
/*
export const Album = (props) => {
  return (
    <div className="album-card">
      /*<div className="album-cover">
         <div className="icons">
          <img className="heart-button" src="icons/heart.png" alt="" />
          <img className="play-button" src="icons/play.png" alt="" />
          <img className="dots-button" src="icons/dots.png" alt="" /> 
        </div> 

        <a href={props.albumurl} className="album-img-hover" target="_blank" rel="noopener noreferrer">
          <img src={props.imgsrc} alt="" className="album-cover-img" />
        </a>
      </div>

      <div>
        <h3>{props.name}</h3>
      </div>

      <div className="album-artists">
        {props.artists.map((artist) => {
          return <a
            key={artist.id}
            className="artists-link"
            href={artist.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer">
            {artist.name}
            <span>,&nbsp;</span>
          </a>
        })}
      </div>
    </div>
  );
};
*/