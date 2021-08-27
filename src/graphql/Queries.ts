import { gql } from "@apollo/client";

export const GET_WEATHER_QUERY = gql`
	query getCityByName($name: String!){
		getCityByName(name: $name) {
			name
			country
			weather {
				summary {
					title
					description
				}
				temperature {
					actual
					feelsLike
					min
					max
				}
				wind {
					speed
					deg
				}
			}
		}
	}
`;
