import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_WEATHER_QUERY } from "../graphql/Queries";
import Search from "../components/Search";
import Weather from "../components/Weather";
import NotFound from "../components/NotFound";

const Home = () => {
	const [city, setCity] = useState("");
	const [getWeather, { loading, error, data }] =
		useLazyQuery(GET_WEATHER_QUERY);
	const handleSubmit = (e: React.FormEvent, c: string) => {
		e.preventDefault();
		getWeather({
			variables: { name: c },
		});
	};
	if (error) return <h1>Error found</h1>;
	return (
		<div className="home">
			<h1>Search for Weather</h1>
			<Search handleSubmit={(e, city) => handleSubmit(e, city)} city={city} setCity={setCity} />
			{ loading && <div>Loading...</div>}
			{data?.getCityByName && (
				<Weather data={data.getCityByName} />
			)}
			{data?.getCityByName === null && (
				<NotFound />
			)}
		</div>
	);
}

export default Home;
