import React from 'react'

import { AlbumWrapper } from 'components/AlbumWrapper'
import { Sidebar } from 'components/Sidebar'

export const App = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
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
      {/* img tag wants a keyboard eventlistener for accessibility */}
      <img
        className='menu'
        src='/icons/dots.svg'
        alt='dot icon'
        onClick={e =>
          (e.target.className = e.target.className.includes('open') ? 'menu' : 'menu open')
        }
      />

      <aside className='sidebar'>
        <h1 className='title'>Playlists</h1>
        <ul>
          <Sidebar />
        </ul>
      </aside>
    </div>
  )
}
