import React from "react";
import StatisticLine from "./StatisticLine";

const Statistics = ({ good, neutral, bad }) => {
	if (!good && !neutral && !bad) {
		return <p>No feedback given</p>;
	}
	const total = good + neutral + bad;
	return (
		<div>
			<StatisticLine text="good" value={good} />
			<StatisticLine text="neutral" value={neutral} />
			<StatisticLine text="bad" value={bad} />
			<StatisticLine text="all" value={good + neutral + bad} />
			<StatisticLine
				text="average"
				value={(good * 1 + bad * -1) / (good + neutral + bad)}
			/>
			<StatisticLine
				text="positive"
				value={`${(good / (good + neutral + bad)) * 100} %`}
			/>
		</div>
	);
};

export default Statistics;
