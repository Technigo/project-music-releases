import React from "react";

//här är vår header
const Header = (props) => {
	console.log(props);

	return (
		<article className="Header">
			<h1>{props.title}</h1>
		</article>
	);
};

export default Header;
