import React from 'react'
import data from './data.json'

import Album from './component/Album'
import Header from './component/Header'


export const App = () => {
  return (
	  <>
    <header>
		  <Header /> 
    </header>
		<section className="album-card-container"> 
			{data.albums.items.map((item) => (
			  <Album 
			  key={item.id} item={item}
			  /> 
			 ))}
		</section>
	  </>
  )
}

