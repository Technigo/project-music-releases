import React from 'react'
import data from './data.json'
import Article from './components/Article';

console.log(data)

export const App = () => {
	return (
		<div className="grid">
			<Article
        img="https://via.placeholder.com/150x150"
				title="Album!"
        band="Random band name"
			/>

			<Article
        img="https://via.placeholder.com/150x150"
				title="Another Album!"
				band="random band name 2"
			/>

      <Article
        img="https://via.placeholder.com/150x150"
				title="wow a third album!"
				band="random band name 3"
			/>

      <Article
        img="https://via.placeholder.com/150x150"
				title="sooo much music!"
				band="random band name 4"
			/>

      <Article
        img="https://via.placeholder.com/150x150"
				title="It never ends!"
				band="random band name 5"
			/>

      <Article
        img="https://via.placeholder.com/150x150"
				title="OK a 6:th album!"
				band="random band name 6"
			/>
		</div>
	);
};


