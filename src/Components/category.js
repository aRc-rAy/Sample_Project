import React from "react";
import SquareBox from "./squareBox";
import "../../src/App.css";

const Category = (props) => {
	return (
		<div className="category">
			<h1>{props.name}</h1>
			<br></br>
			<div className="categoryBox">
				<SquareBox />
				<SquareBox />
				<SquareBox />
				<SquareBox />
			</div>
		</div>
	);
};

export default Category;
