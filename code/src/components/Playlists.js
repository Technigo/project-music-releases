import React from 'react'
import Icons from './Icons'

const Playlists = (props) => {
	const playlists = props.data
	return (
		<article>
			<a className='nav-link' href={playlists.external_urls.spotify}>
				<div className='cover-wrapper'>
					<img
						className='album'
						src={playlists.images[0].url}
						alt='playlist cover'
					/>
					<div className='overlay'>
						<Icons />
					</div>
				</div>
			</a>
			<a className='nav-link' href={playlists.external_urls.spotify}>
				<h3 className='nav-link'>{playlists.name}</h3>
			</a>
		</article>
	)
}

export default Playlists
