import React from "react";
import Header from "./Header";
import Body from "./Body";

function Card(props) {
	console.log(props, "header");
	return (
		<>
			<Header props={props} />
			<Body props={props} />
		</>
	);
}

export default Card;
