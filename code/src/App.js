import React from 'react';

// Components
import AlbumList from 'Components/AlbumList'

export const App = () => {
  return (
    <div className="main-wrapper">
      <h1>New albums & singles</h1>

      <div className="all-albums--wrapper">
        {/* Fetching all albums */}
        <AlbumList />
      </div>
    </div>
  )
}