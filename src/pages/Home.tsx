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
	return (
		<div className="container mx-auto">
			<h1 className="text-center text-2xl mt-5">Search for Weather</h1>
			<Search handleSubmit={(e, city) => handleSubmit(e, city)} city={city} setCity={setCity} />
			{ loading && <div className="mx-auto text-center mt-5">Loading...</div>}
			{ error && <div className="mx-auto text-center mt-5">Oops! Something went wrong!</div>}
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
