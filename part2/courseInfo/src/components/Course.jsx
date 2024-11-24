import React from "react";
import Header from "./Header";
import Content from "./Content";

const Course = ({ course }) => {
	const { id, name, parts } = course;
	return (
		<>
			<Header course={name} />
			<Content content={parts}/>
		</>
	);
};

export default Course;
