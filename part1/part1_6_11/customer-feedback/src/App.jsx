import { useState } from "react";
import Button from "./components/Button";
import Statistics from "./components/Statistics";

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	return (
		<>
			<div>
				<h1>give feedback</h1>
				<Button onClick={() => setGood(good + 1)} value="good" />
				<Button onClick={() => setNeutral(neutral + 1)} value="neutral" />
				<Button onClick={() => setBad(bad + 1)} value="bad" />
				<Statistics good={good} neutral={neutral} bad={bad} />
			</div>
		</>
	);
};

export default App;
