import React from 'react';
import playlists from 'playlists.json';

const Playlists = () => {
  const listOfPlaylists = playlists.playlists.items;
  return (
    <>
      <img className="logo" src="../icons/favicon.svg" alt="logo for playlist"></img>
      <h2 className="list--title">Playlists</h2>
      <ul className="list--wrapper">
        {listOfPlaylists.map((list) => {
          return (
            <li key={list.id}>
              <a
                href={list.external_urls.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="list--link"
              >
                {list.name}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Playlists;
