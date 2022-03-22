import React from 'react'
import Icons from './Icons'

const Releases = (props) => {
	const releases = props.data
	const Artists = releases.artists.map((artist) => {
		return (
			<a
				href={artist.external_urls.spotify}
				key={artist.id}
				alt='artist'
				className='nav-link artist'
			>
				{artist.name}
			</a>
		)
	})

	return (
		<article>
			<a className='nav-link' href={releases.external_urls.spotify}>
				<div className='cover-wrapper'>
					<img
						className='album'
						src={releases.images[1].url}
						alt='album cover'
					/>
					<div className='overlay'>
						<Icons />
					</div>
				</div>
			</a>
			<a className='nav-link' href={releases.external_urls.spotify}>
				<h3 className='nav-link'>{releases.name}</h3>
			</a>
			<div className='artist-container'>{Artists}</div>
		</article>
	)
}

export default Releases
