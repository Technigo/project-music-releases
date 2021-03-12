import React from 'react'
import data from './data.json'
import Album from './components/Album'
import Header from './components/Header'
import stretchGoal from './stretch-goal.json'
import Sidebar from './components/Sidebar'

// console.log(stretchGoal)

export const App = () => {
  return (
    <div className="main-wrapper">
      <div className="page-container">
        <aside className="side-bar">
          <h2 className="playlist-header">playlists</h2>
          <Sidebar data={stretchGoal}/>
        </aside>
        <main>
          <Header />
          <Album data={data}/>
        </main>
      </div>
    </div>
  )
}
