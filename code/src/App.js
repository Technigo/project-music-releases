import React from 'react';

// Components
import AlbumList from 'Components/AlbumList';
import Playlists from 'Components/PlayLists';

export const App = () => {
  return (
    <main className="main-wrapper">
      <div className="all-content--wrapper">
        <section className="all-playlists--wrapper">
          <Playlists />
        </section>
        <section>
          <h1 className="main--heading">New albums & singles</h1>
          <div className="all-albums--wrapper">
            {/* Fetching all albums */}
            <AlbumList />
          </div>
        </section>
      </div>
    </main>
  );
};
