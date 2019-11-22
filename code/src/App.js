import React from 'react'
import data from './data.json'
import './app.css'
import { Album } from './components/Album'
// import { Header } from './components/Header'
// import { Artist } from './components/Artist'

console.log(data)

export const App = () => {
	return (
		<div className='contentWrapper'>
			{data.albums.items.map(item => (
				<Album key={item.id} item={item} />
			))}
		</div>
	)
}
