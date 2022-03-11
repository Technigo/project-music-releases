import React from 'react'
import MusicInfo from 'components/MusicInfo'
import data from 'data.json'
import Header from 'components/Header'

/* Rendering the main structure of website */

export const App = () => {
	return (
    <div className="wrapper">
      <header><Header /></header>
      <div className="page-wrapper">
        <MusicInfo musicList={data} />
      </div>
    </div>
	)}