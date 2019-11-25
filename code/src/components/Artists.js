import React from 'react'
import './artists.css'

export const Artist = props => {
	return (
		<a className='artist' href={props.item.external_urls.spotify}>
			{props.item.name}
		</a>
	)
}
