import React from 'react'
import data from './data.json'
import Album from './components/Album'

console.log(data.albums.items[3].name)

console.log('Data', data)

export const App = () => {
  return (
		<section> 
			{data.albums.items.map((Album) => {
        return <Album/>
		})}
		</section>
   )
}

