import Part from "./Part";

const Content = ({ content }) => {
	return (
		<>
			{content && content.map((part) => <Part key={part.id} part={part} />)}
			<p>
				<b>
					total of{" "}
					{content &&
						content
							.map((part) => part.exercises)
							.reduce((acc, curr) => acc + curr, 0)}{" "}
					exercises
				</b>
			</p>
		</>
	);
};

export default Content;
