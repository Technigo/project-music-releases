import React from 'react';
import './Heading.css';
import { PlaylistHeader } from './PlaylistHeader';

export const Heading = () => {
	return (
		<header className="heading">
			<h1>New albums & singles</h1>
			<PlaylistHeader />
		</header>
	);
};
