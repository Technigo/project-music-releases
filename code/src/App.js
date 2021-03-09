import React from "react";
import data from "./data.json";
import stretchgoal from "./stretchgoal.json";
import { Header } from "./components/Header";
import { Images } from "./components/Images";
import { Artist } from "./components/Artist";
import { Album } from "./components/Album";
import { Playlists } from "./components/Playlists";

console.log(stretchgoal)

export const App = () => {
    return ( 
      <div>
        <Header />
        <div className="main-container">
          < Playlists />
          <section className="album-card-container">
      
            { data.albums.items.map(album => {
              return (
                <div key={album.id} className="album-card">
                  < Images 
                      image={album.images[0].url} />
                  < Album 
                      albumLink={album.external_urls.spotify} 
                      albumTitle={album.name} />
                  <div className="artists">
                    {album.artists.map(artist => {
                      return (
                          < Artist 
                              key={artist.id}
                              artistLink={artist.external_urls.spotify} 
                              artistName={artist.name} />
                      )
                    
                    })}
                  </div>
                </div>
              )
            })}
          
          </section>
        </div>
      </div>
    )
}