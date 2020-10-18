import React, { useState } from 'react';
import {
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from 'reactstrap';
import { ReactComponent as MockifyIcon } from './icons8-spotify.svg';
import { Playlists } from './Playlists';
import stretchGoal from './stretch-goal.json';

console.log(stretchGoal.playlists);

export const Header = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const toggle = () => setDropdownOpen((prevState) => !prevState);

	return (
		<div className="header-styling">
			<div className="drop-down-container">
				<Dropdown isOpen={dropdownOpen} toggle={toggle}>
					<DropdownToggle className="drop-down-button" caret>
						<div className="menu-icon">
							<MockifyIcon className="mockify-icon" />
						</div>
					</DropdownToggle>
					<DropdownMenu className="drop-down-menu">
						<DropdownItem className="drop-down-item">
							<div className="drop-down-content">
								<h3>Playlists</h3>
								{stretchGoal.playlists.items.map((item) => (
									<Playlists
										className="playlist"
										key={item.id}
										playListName={item.name}
										playListUrl={item.external_urls.spotify}
									/>
								))}
							</div>
						</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</div>
			<MockifyIcon className="mockify-icon-desktop" />
			<div className="header-text-container">
				<h1>Mockify</h1>
			</div>
		</div>

		// <div>
		// 	<Button id={toggler}>Playlists</Button>
		// 	<div className="menu-icon"></div>
		// 	<MockifyIcon className="mockify-icon" />
		// 	<h1>Mockify</h1>
		// 	<UncontrolledCollapse toggler="#toggler">
		// 		<Card>
		// 			<CardBody>
		// 				<div className="drop-down-content">
		// 					{stretchGoal.playlists.items.map((item) => (
		// 						<Playlists
		// 							className="playlist"
		// 							key={item.id}
		// 							playListName={item.name}
		// 							playListUrl={item.external_urls.spotify}
		// 						/>
		// 					))}
		// 				</div>
		// 			</CardBody>
		// 		</Card>
		// 	</UncontrolledCollapse>
		// </div>
	);
};
