import React from 'react'
import MusicInfo from 'components/MusicInfo'
import data from 'data.json'

//console.log(data)

export const App = () => {
	return (
    <section>
      <MusicInfo musicList={data} />
    </section>
	)}