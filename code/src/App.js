import React from 'react';
import data from './data.json';
import {Header} from './Components/Header'
import {Cover} from './Components/Cover'
import {Album} from './Components/Album'
import {Artist} from './Components/Artist'
import {Singles} from './Components/Singles'

import stretchGoal from './stretchGoal.json';
import {Playlist} from './Components/Playlist'


console.log(data);
console.log(stretchGoal);

export const App = () => {
  return (
    <>
    <section className="big-container">
    <section className="outer-wrapper">
        <div className="header">
            <Header/>
        </div>
      <section className="container" >
      {data.albums.items.map((item)=> {
console.log(item.album_type)
        return item.album_type === "single" ?  <>
            <div className="albumCard">
              <div className="coverImage">
                <Cover 
                  key = {item.images[1].url}
                  image = {item.images[1].url}
                  />
              </div>
              <div className="albumName">
                <Album 
                  key = {item.external_urls.id}
                  name = {item.name}
                  url = {item.external_urls.spotify}
                  />
              </div> 
              <div className="artistName">
                <Artist 
                  key = {item.artists[0].id}
                  name = {item.artists[0].name}
                  url = {item.artists[0].href}
                  artist = {item.artists}
                  />
              </div>
            </div>  
          </>
        : null;
        })} 
      </section>
      <div className="header">
        <h2>New albums</h2>
      </div>
      <section className="container" >
             {data.albums.items.map((item)=> {
        return item.album_type === "album" ?  <>
        
            <div className="albumCard">
              <div className="coverImage">
                <Cover 
                  key = {item.images[1].url}
                  image = {item.images[1].url}
                  />
              </div>
              <div className="albumName">
                <Album 
                  key = {item.external_urls.id}
                  name = {item.name}
                  url = {item.external_urls.spotify}
                  />
              </div> 
              <div className="artistName">
                <Artist 
                  key = {item.artists[0].id}
                  name = {item.artists[0].name}
                  url = {item.artists[0].href}
                  artist = {item.artists}
                  />
              </div>
            </div>  
          </>
        : null;
      })} 
      </section>
      </section>
        <div className="list-of-playlists">
          <h2>Popular playlists</h2>
          {stretchGoal.playlists.items.map((item)=> {
            return (
              <>  
                <div className="playlist">
                <Playlist
                name = {item.name}
                url = {item.external_urls.spotify}
                />
                </div>
              </>
            )})}
        </div>
             
        </section>
    </>
    
  );
}
