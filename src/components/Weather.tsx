import React from "react";
import { WeatherType } from "../graphql/types";
export type Props = {
    data: WeatherType
};

const Weather: React.FC<Props> = ({ data }) => {
	return (
		<div className="weather">
			<h1>City Name: {data.name}</h1>
			<h1>
				Temperature:{" "}
				{(
					data.weather.temperature.actual - 273.15
				).toFixed(2)}
			</h1>
			<h1>
				Description: {data.weather.summary.description}
			</h1>
			<h1>Wind: {data.weather.wind.speed}</h1>
		</div>
	);
};

export default Weather;
