import Part from "./Part";

const Content = (props) => {
	const { part1, part2, part3, exercises1, exercises2, exercises3 } = props;
	return (
		<>
			<Part exercises={exercises1} part={part1} />
			<Part exercises={exercises2} part={part2} />
			<Part exercises={exercises3} part={part3} />
		</>
	);
};

export default Content;
