const Persons = ({ persons }) => {
	return (
		<>
			{persons && persons.map((person, i) => (
				<p key={i}>
					{person.name} {person.phoneNumber}
				</p>
			))}
		</>
	);
};

export default Persons;
