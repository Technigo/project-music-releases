import React from "react";

import data from "./data.json";

import { Header } from "./components/Header";
import { Playlists } from "./components/Playlists";
import { Images } from "./components/Images";
import { Artist } from "./components/Artist";
import { Album } from "./components/Album";
import { AlbumType } from "./components/AlbumType"


export const App = () => {
    return ( 
      <>
        <Header />
        <main className="main-container">
          < Playlists />
          <section className="album-card-container">
            {data.albums.items.map(album => {
                return (
                    <div key={album.id} className="album-card">
                        < Images 
                            image={album.images[0].url} />
                        <div className="album-box">
                            < Album 
                                albumLink={album.external_urls.spotify} 
                                albumTitle={album.name} />
                            < AlbumType 
                                type={album.album_type}/>
                        </div>
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
        </main>
      </>
    )
}