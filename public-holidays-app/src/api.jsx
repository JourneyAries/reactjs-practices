import axios from 'axios';

export const fetchHoliday = async (term) => {
	try {
		const response = await axios.get(
			`https://openholidaysapi.org/PublicHolidays?countryIsoCode=${term}&validFrom=2023-01-01&validTo=2023-12-31`,
		);
		return response;
	} catch (error) {
		console.error('Error Fetching holidays:', error);
	}
};
