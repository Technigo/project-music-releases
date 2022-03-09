import React from 'react'
import data from 'data.json'
import { Albums } from 'components/Albums'

export const App = () => {
	return (
		<section className="albums-wrapper">
     {data.albums.items.map((item) => {
          return <Albums key={item.id} albumTitle={item.name} image={item.images[1].url} artists={item.artists[0].name} url={item.external_urls.spotify} />
        })}
		</section>
	)}