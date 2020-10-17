import React from 'react';
import { ReactComponent as MockifyIcon } from './icons8-spotify.svg';
import { Playlists } from './Playlists';
import stretchGoal from './stretch-goal.json';

console.log(stretchGoal.playlists);

export const Header = () => {
	return (
		<div className="menu-icon">
			<div className="drop-down">
				<MockifyIcon className="mockify-icon" />
			</div>
			<div className="drop-down-content">
				{stretchGoal.playlists.items.map((item) => (
					<Playlists
						className="playlist"
						key={item.id}
						playListName={item.name}
						playListUrl={item.external_urls.spotify}
					/>
				))}
			</div>

			<h1>Mockify</h1>
		</div>
	);
};
