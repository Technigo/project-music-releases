import React from 'react';
import data from './data.json';
import { Header } from './Header';
import { Footer } from './Footer';
import { MusicContainer } from './MusicContainer';

export const App = (props) => {
	return (
		<>
			<Header />
			<MusicContainer />
			<Footer />
		</>
	);
};
