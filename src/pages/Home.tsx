import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_WEATHER_QUERY } from "../graphql/Queries";

function Home() {
	const [city, setCity] = useState("");
	const [getWeather, { loading, error, data }] = useLazyQuery(GET_WEATHER_QUERY);
	const handleSubmit = (e: React.FormEvent<HTMLElement>, c: string) => {
		e.preventDefault();
		getWeather({
			variables: { name: c },
		});
        console.log('fire!')
	};
	if (error) return <h1>Error found</h1>;
	if (data) {
		console.log(data);
	}
	return (
		<div className="home">
			<h1>Search for Weather</h1>
            <form onSubmit={(e) => handleSubmit(e, city)}>
                <input
                    type="text"
                    placeholder="enter city name ..."
                    onChange={(e) => setCity(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
		</div>
	);
}

export default Home;
