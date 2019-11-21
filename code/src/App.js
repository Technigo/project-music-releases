import React from 'react'
import SideBar from './components/SideBar/SideBar'
import News from './components/News/News'

export const App = () => {
  return (
    <div className="app">
      <SideBar />
      <News />
    </div>
  )
}
