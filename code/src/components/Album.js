import React from 'react'
import './album.css'
import { Logos } from './icons/Logos'

export const Album = props => (
	<div className='wrapper'>
		<div className='albumCards'>
			<img
				src={props.item.images[0].url}
				className='albumCovers'
				alt='Album cover image'
			/>
			<div className='logo'>
				<Logos />
			</div>
			<div className='albumName'>
				<h2>{props.item.name}</h2>
			</div>
		</div>
	</div>
)
