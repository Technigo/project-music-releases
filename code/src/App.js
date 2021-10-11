import React from 'react'
import data from './data.json'

import Album from './components/Album';
import Header from './components/Header';


export const App = () => {
  return (
    <div>
<Header
title="New Album and Singles"
/>
 
	<Album
				title="Spring is coming!"
				description="Just a description"
				img="https://via.placeholder.com/150x150"
			/>

			<Album
				title="Winter is coming sooner!"
				description="Just another description"
				img="https://via.placeholder.com/300x300"
			/>    
      </div>
  );
};
