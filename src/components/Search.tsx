import React from "react";
export type Props = {
	city: string;
	handleSubmit: (e: React.FormEvent, city: string) => void;
	setCity: (city: string) => void;
};

const Search: React.FC<Props> = ({ city, handleSubmit, setCity }) => {
	return (
		<div className="text-center mt-4">
			<form onSubmit={(e) => handleSubmit(e, city)}>
				<div className="w-2/3 sm:w-1/2 mx-auto h-10 pl-3 pr-2 bg-white border rounded-full flex justify-between items-center relative">
					<input
						type="search"
						name="search"
						id="search"
						autoComplete="off"
						placeholder="Search"
						onChange={(e) => setCity(e.target.value)}
						className="appearance-none w-full outline-none focus:outline-none active:outline-none"
					/>
					<button
						type="submit"
						className="ml-1 outline-none focus:outline-none active:outline-none"
					>
						<svg
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							viewBox="0 0 24 24"
							className="w-6 h-6"
						>
							<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
						</svg>
					</button>
				</div>
			</form>
		</div>
	);
};

export default Search;
