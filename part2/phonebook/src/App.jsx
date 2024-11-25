import { useState } from "react";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";

const App = () => {
	const [persons, setPersons] = useState([
		{ name: "Arto Hellas", phoneNumber: "39-44-5323523" },
	]);
	const [newName, setNewName] = useState("");
	const [newPhoneNum, setNewPhoneNum] = useState("");

	const handleNameChange = (e) => {
		setNewName(e.target.value);
	};

	const handlePhoneNumChange = (e) => {
		setNewPhoneNum(e.target.value);
	};

	const handlePhonebookSubmit = (e) => {
		e.preventDefault();
		if (persons.find((person) => person.name == newName)) {
			alert(`${newName} is already added to phonebook`);
			setNewName("");
			return;
		}

		setPersons([...persons, { name: newName, phoneNumber: newPhoneNum }]);
		setNewName("");
		setNewPhoneNum("");
	};

	return (
		<div>
			<h2>Phonebook</h2>
			<h3>Add a new</h3>
			<PersonForm
				handleNameChange={handleNameChange}
				handlePhoneNumChange={handlePhoneNumChange}
				handlePhonebookSubmit={handlePhonebookSubmit}
				newName={newName}
				newPhoneNum={newPhoneNum}
			/>
			<h2>Numbers</h2>
			<Persons persons={persons} />
		</div>
	);
};

export default App;
