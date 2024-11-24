const Part = (props) => {
	const { exercises, part } = props;
	return (
		<>
			<p>
				{part} {exercises}
			</p>
		</>
	);
};

export default Part;
