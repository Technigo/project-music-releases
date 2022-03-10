import React from 'react'
import data from './data.json'
import Album from 'components/Album';

export const App = () => { 

  return (
  <>
    <div><h1 className="title">New albums & singles</h1></div>
    <hr className="hr" />
    <main className="main">
    {data.albums.items.map(item => {
    const image = item.images[1].url;
    const artists = item.artists;
    const artistNames =  artists.map(artist => artist.name).join(', ');
    const songtitle =item.name;
    const albumUrl = item.external_urls.spotify;
    return (
        <Album image={image} songtitle={songtitle} albumUrl={albumUrl} name={artistNames} artists={artists} key={item.id}/>
    )
  })}
  </main>
  <footer className="footer">Week 9 - <span>Project Music Releases</span> - © Jin Cho & Camilla Hallberg 2022</footer>
  </>
  );
}

