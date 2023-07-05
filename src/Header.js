import React from "react";

function Header(props) {
	console.log(props.props.props.img, "image");
	return (
		<>
			<img
				src={props.props.props.img}
				alt='food item'
				style={{ width: "100px" }}
			/>
		</>
	);
}

export default Header;
