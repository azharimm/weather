export type WeatherType =  {
	name: string;
	weather: weather;
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