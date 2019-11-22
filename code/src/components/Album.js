import React from 'react'
import './album.css'

export const Album = props => (
	<div>
		<img src={props.item.images[0].url} className='albumCovers' />
		<h2>{props.item.name}</h2>
	</div>
)
