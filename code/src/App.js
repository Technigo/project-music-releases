import React from 'react'

import { AlbumWrapper } from 'components/AlbumWrapper'

export const App = () => {
  return (
    <div className='container'>
      <h1 className='title'>New albums</h1>
      <div className='album-grid'>
        <AlbumWrapper type={'album'} />
      </div>
      <h1 className='title'>New singles</h1>
      <div className='album-grid'>
        <AlbumWrapper type={'single'} />
      </div>
    </div>
  )
}
