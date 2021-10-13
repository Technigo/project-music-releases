import React from 'react'

import { AlbumCover } from 'components/AlbumCover'

export const App = () => {
  return (
    <div className='container'>
      <h1 className='title'>New albums &amp; singles</h1>
      <div className='album-grid'>
        <AlbumCover />
      </div>
    </div>
  )
}
