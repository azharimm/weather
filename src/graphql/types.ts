export type WeatherType =  {
	name: string;
	weather: weather;
}

export type weather = {
	summary: summary;
	temperature: temperature;
	wind: wind;
	clouds: clouds;
}

export type summary = {
	title: string;
	description: string;
	icon: string;
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

export type clouds = {
	visibility: number;
	humidity: number;
}