import React from 'react'

import { AlbumCover } from 'components/AlbumCover'

export const App = () => {
  return (
    <div>
      <h1 className='title'>New albums and singles</h1>
      <div className='album-grid'>
        <AlbumCover />
      </div>
    </div>
  )
}
