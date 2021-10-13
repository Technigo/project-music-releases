import React from 'react';
import data from './data.json';

import Album from './components/Album';

export const App = () => {
	return (
		<>
			{data.albums.items.map((item) => (
				<Album
					img={item.images[1].url}
          albumLink={item.external_urls.spotify}
					album={item.name}
					artists={item.artists}
				/>
			))}
		</>
	);
  };