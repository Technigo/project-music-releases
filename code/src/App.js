import React from 'react'
import data from './data.json'

console.log(data)

export const App = () => {
  return (
    <div className="App">
      {data.albums.items.map(item => {
        return <div key={item.id} className="Card">
          <div className="Img-wrapper">
            <div className="Icon-wrapper">
              <img className="Hover-image heart" src="icons/heart.svg" alt="hover-image"></img>
              <img className="Hover-image play" src="icons/play.svg" alt="hover-image"></img>
              <img className="Hover-image dots" src="icons/dots.svg" alt="hover-image"></img>

            </div>
            <img className="Album-cover" src={item.images[0].url} alt="images"></img>
          </div>
          <h3><a href={item.external_urls.spotify}>{item.name}</a></h3> <p><a href={item.artists[0].external_urls.spotify}>{item.artists[0].name}</a> </p>
        </div>;
      })}
    </div>
  );
};


