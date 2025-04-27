import { useEffect, useState } from 'react';
import Movie from './components/Movie';
import { useMovieSearch } from './hook/useMovieSearch';

function App() {
	const [inputValue, setInputValue] = useState('');
	const [query, setQuery] = useState('');
	const { movies, loading, error } = useMovieSearch(query);

	//agar yang ada di localstorage direndering pertama kali dibuka websitenya
	useEffect(() => {
		const savedMovies = localStorage.getItem('lastMovies');
		const savedQuery = localStorage.getItem('lastQuery');

		if (savedMovies) {
			setQuery(savedQuery);
			setInputValue(savedQuery);
		}
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (inputValue.trim()) {
			setQuery(inputValue);
		}
		console.log(inputValue);
		setInputValue('');
	};

	return (
		<div className='max-w-[360px] flex flex-col px-2 py-8 gap-y-4 bg-white [&>*]:select-none m-auto'>
			{/* header */}
			<div className='flex flex-col gap-y-2'>
				{/* heading */}
				<h1 className='text-xl text-slate-900 font-bold'>Movie Search Page</h1>

				{/* form input */}
				<form
					onSubmit={handleSubmit}
					className='flex gap-x-3 [&>*]:cursor-pointer'>
					<input
						type='text'
						placeholder='Search here...'
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						className='text-sm grow rounded-sm p-1 border border-slate-300 text-slate-600'
					/>
					<button
						type='submit'
						className='rounded p-2 bg-slate-300 text-slate-900 text-sm'>
						Search
					</button>
				</form>
			</div>

			{/* body */}
			<div className='grid grid-cols-2 gap-2'>
				{movies.map((movie) => (
					<Movie movie={movie} key={movie.imdbID} />
				))}
			</div>
		</div>
	);
}

export default App;
