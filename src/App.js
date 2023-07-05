import React from "react";
import Card from "./Card.js";
import foodList from "./data.js";

function App() {
	return (
		<>
			{foodList.map((item, index) => {
				console.log(item);
				return <Card props={item} key={index} />;
			})}
		</>
	);
}

export default App;
