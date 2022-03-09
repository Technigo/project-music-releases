import React from 'react'
import MusicInfo from 'components/MusicInfo'
import data from 'data.json'
import Header from 'components/Header'
import Hover from 'components/Hover'

//console.log(data)

export const App = () => {
	return (
    <div className="page-wrapper">
      <Header />
      <MusicInfo musicList={data} />
    </div>
	)}