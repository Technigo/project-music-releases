import React from 'react'
import MusicInfo from 'components/MusicInfo'
import data from 'data.json'
import Header from 'components/Header'

//console.log(data)

export const App = () => {
	return (
    <>
    <div class="wrapper">
        <header><Header /></header>
    <div className="page-wrapper">
      <MusicInfo musicList={data} />
    </div>
    </div>
    </>
	)}