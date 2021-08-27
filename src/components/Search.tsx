import React from "react";
export type Props = {
    city: string;
    handleSubmit: (e: React.FormEvent, city: string) => void;
    setCity: (city: string) => void;
};

const Search: React.FC<Props> = ({ city, handleSubmit, setCity}) => {
	return (
		<form onSubmit={(e) => handleSubmit(e, city)}>
			<input
				type="text"
				placeholder="enter city name ..."
				onChange={(e) => setCity(e.target.value)}
			/>
			<button type="submit">Search</button>
		</form>
	);
};

export default Search;
