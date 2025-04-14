import axios from 'axios';

export const fetchHoliday = async (term) => {
	try {
		const response = await axios.get(
			`https://openholidaysapi.org/PublicHolidays?countryIsoCode=${term}&validFrom=2023-01-01&validTo=2023-12-31`,
		);
		return response.data;
	} catch (error) {
		console.error('Error Fetching holidays:', error);
	}
};

export const getCountries = async () => {
	try {
		const params = new URLSearchParams({
			languageIsoCode: 'EN',
		});
		const response = await axios.get(
			`https://openholidaysapi.org/Countries?${params}`,
			// `https://openholidaysapi.org/Countries?$languageIsoCode=EN`,
		);
		return response.data.map((country) => ({
			isoCode: country.isoCode,
			name: country.name?.[0].text || 'Country Not Supported',
		}));
	} catch (error) {
		console.error('Error mengambil data negara:', error);
		return [];
	}
};
