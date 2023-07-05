import React from "react";

function Body(props) {
	console.log(props.props.props.name, "body");
	return (
		<>
			<h3>{props.props.props.name}</h3>
			<p>{props.props.props.price}</p>
			<p>{props.props.props.rating}</p>
			<p>{props.props.props.address}</p>
		</>
	);
}

export default Body;
