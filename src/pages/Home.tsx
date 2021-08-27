import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_WEATHER_QUERY } from "../graphql/Queries";

export type WeatherType =  {
	name: string;
	country: string;
	weather: string;
}

export type weather = {
	summary: summary;
	temperature: temperature;
	wind: wind;
}

export type summary = {
	title: string;
	description: string;
}

export type temperature = {
	actual: number;
	feelsLike: number;
	min: number;
	max: number;
}

export type wind = {
	speed: number;
	deg: number;
}

const Home = () => {
	const [city, setCity] = useState("");
	const [getWeather, { loading, error, data }] =
		useLazyQuery(GET_WEATHER_QUERY);
	const handleSubmit = (e: React.FormEvent<HTMLElement>, c: string) => {
		e.preventDefault();
		getWeather({
			variables: { name: c },
		});
		console.log("fire!");
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
				{data?.getCityByName && (
					<div className="weather">
						<h1>City Name: {data.getCityByName.name}</h1>
						<h1>Temperature: {(data.getCityByName.weather.temperature.actual - 273.15).toFixed(2)}</h1>
						<h1>Description: {data.getCityByName.weather.summary.description}</h1>
						<h1>Wind: {data.getCityByName.weather.wind.speed}</h1>
					</div>
				)}
				{data?.getCityByName === null && (
					<div className="weather">No City Found!</div>
				)}
			</form>
		</div>
	);
}

export default Home;
