const PersonForm = ({
	handlePhonebookSubmit,
	handleNameChange,
	handlePhoneNumChange,
	newName,
	newPhoneNum,
}) => {
	return (
		<>
			<form onSubmit={handlePhonebookSubmit}>
				<div>
					name: <input value={newName} onChange={handleNameChange} />
				</div>
				<div>
					number: <input value={newPhoneNum} onChange={handlePhoneNumChange} />
				</div>
				<div>
					<button type="submit">add</button>
				</div>
			</form>
		</>
	);
};

export default PersonForm;
