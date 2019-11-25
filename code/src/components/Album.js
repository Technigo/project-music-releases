import React from 'react'
import './album.css'
import { Logos } from './icons/Logos'
import { Artist } from './Artists'

export const Album = props => (
	<div className='wrapper'>
		<div className='albumCards'>
			<img
				src={props.item.images[0].url}
				className='albumCovers'
				alt='Album cover image'
			/>

			<Logos />
		</div>
		<div className='titleWrapper'>
			<a className='albumName' href={props.item.external_urls.spotify}>
				{props.item.name}
			</a>
			<div className='artistName'>
				{props.item.artists.map(item => {
					return <Artist key={item.id} item={item} />
				})}
			</div>
		</div>
	</div>
)
