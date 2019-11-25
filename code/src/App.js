import React from 'react'
import data from './data.json'
import './app.css'
import { Album } from './components/Album'

export const App = () => {
	return (
		<React.Fragment>
			<header>
				<h1>New albums & singles</h1>
			</header>
			<div className='contentWrapper'>
				{data.albums.items.map(item => (
					<Album key={item.id} item={item} />
				))}
			</div>
		</React.Fragment>
	)
}
