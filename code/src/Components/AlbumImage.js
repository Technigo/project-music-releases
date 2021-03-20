import React from 'react';

const AlbumImage = (prop) => {
    return (
              <div className="image-container">    
                  <img className="album-image"src={prop.album.images[1].url} alt="Album"/>
                  <div className="icons-container">
                    <div className="hover-container">
                        <img className="heart" src="./icons/heart.svg" alt="heart icon"/>
                        <a href={prop.album.external_urls.spotify} title="link to spotify" target="_blank" rel="noopener noreferrer" className="play-container">
                            <img className="play" src="./icons/play.svg" alt="play button" />
                        </a>
                        <img className="dots" src="./icons/dots.svg" alt="dots icon" />
                    </div>
                  </div>
              </div>
    )
} 
export default AlbumImage;