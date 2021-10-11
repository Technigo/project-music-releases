import React from 'react';

const Album = (props) => {
	console.log(props);

	return (
		<article className="album">
			<h2>{props.title}</h2>
			<p>{props.description}</p>
			<p>Date of publish: Monday 11th of October</p>
			<img src={props.img} alt="Spring view" />
			<div className="album-tag-container">
				<div className="album-tag">weather</div>
				<div className="album-tag">europe</div>
				<div className="album-tag">spring</div>
			</div>
		</article>
	);
};

export default Album;
