import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const useMovieSearch = (query) => {
	const [movies, setMovies] = useState(() => {
		const savedMovies = localStorage.getItem('lastMovies');
		return savedMovies ? JSON.parse(savedMovies) : [];
	});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const apiKey = import.meta.env.VITE_API_KEY;
	const baseUrl = import.meta.env.VITE_BASE_URL;

	useEffect(() => {
		if (!query) return;

		const fetchMovies = async () => {
			setLoading(true);
			try {
				const response = await axios.get(
					`${baseUrl}apikey=${apiKey}&s=${query}`,
				);
				console.log('API Response:', response.data);
				if (response.data.Response) {
					const limitedMovies = response.data.Search.slice(0, 4);
					setMovies(limitedMovies);
					console.log('Movie set:', limitedMovies);

					localStorage.setItem('lastMovies', JSON.stringify(limitedMovies));
					localStorage.setItem('lastQuery', query);
				} else {
					console.log('No results or error from API:', response.data.Error);
					setMovies([]);
				}
			} catch (error) {
				console.error('Fetch error:', error);
				setError(error.message);
			} finally {
				setLoading(false);
				console.log('Fetch completed');
			}
		};
		fetchMovies();
	}, [query]);

	console.log('Current state:', { movies, loading, error });
	return { movies, loading, error };
};

export default useMovieSearch;
