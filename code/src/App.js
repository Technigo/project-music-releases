import React from 'react'
import data from './data.json'
import { AlbumCover } from 'components/AlbumCover'

console.log(data)

export const App = () => {
	return data.albums.items.map(item => {
		return <AlbumCover url={item.images[0].url} />
	})
}