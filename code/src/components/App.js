import React from "react";
import data from "../data.json";
import { Album } from "./Album";
import { Header } from "./Header";

console.log("data", data);

const items = data.albums.items;

console.log("items", items);

export const App = () => {
	return (
		<div>
			<Header />
			<div className="album-container">
				{items.map((data) => {
					return <Album key={data.id} src={data.images[1].url} title={data.name} arrayOfArtists={data.artists} titleUrl={data.external_urls.spotify} />;
				})}
			</div>
		</div>
	);
};
