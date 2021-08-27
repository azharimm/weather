import React from "react";
import { WeatherType } from "../graphql/types";
export type Props = {
	data: WeatherType;
};

const Weather: React.FC<Props> = ({ data }) => {
	return (
		<div className="weather">
			<div className="mt-6 flex items-center justify-center ">
				<div className="flex flex-col bg-white p-4 w-full max-w-xs rounded-lg border-2">
					<div className="font-bold text-xl">{data.name}</div>
					<div className="text-sm text-gray-500">
						Thursday 10 May 2020
					</div>
					<div className="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
						<img src={`http://openweathermap.org/img/w/${data.weather.summary.icon}.png`} alt="" />
					</div>
					<div className="flex flex-row items-center justify-center mt-6">
						<div className="font-medium text-6xl">{(data.weather.temperature.actual - 273.15).toFixed(2)}°</div>
						<div className="flex flex-col items-center ml-6">
							<div>{data.weather.summary.description}</div>
							<div className="mt-1">
								<span className="text-sm">
									<i className="far fa-long-arrow-up"></i>
								</span>
								<span className="text-sm font-light text-gray-500">
								{(data.weather.temperature.max - 273.15).toFixed(2)}°C
								</span>
							</div>
							<div>
								<span className="text-sm">
									<i className="far fa-long-arrow-down"></i>
								</span>
								<span className="text-sm font-light text-gray-500">
								{(data.weather.temperature.min - 273.15).toFixed(2)}°C
								</span>
							</div>
						</div>
					</div>
					<div className="flex flex-row justify-between mt-6">
						<div className="flex flex-col items-center">
							<div className="font-medium text-sm">Wind</div>
							<div className="text-sm text-gray-500">{data.weather.wind.speed}k/h</div>
						</div>
						<div className="flex flex-col items-center">
							<div className="font-medium text-sm">Humidity</div>
							<div className="text-sm text-gray-500">{data.weather.clouds.humidity}%</div>
						</div>
						<div className="flex flex-col items-center">
							<div className="font-medium text-sm">
								Visibility
							</div>
							<div className="text-sm text-gray-500">{data.weather.clouds.visibility}km</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Weather;
