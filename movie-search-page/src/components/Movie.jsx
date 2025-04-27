import React from 'react';

const Movie = ({ movie }) => {
	return (
		<>
			{/* card */}
			<div className='flex flex-col rounded-sm p-2 gap-y-2 bg-slate-100'>
				<img
					src={movie.Poster}
					className=' w-[152px] h-[163px] object-cover rounded-sm'
				/>
				<p className='text-sm text-slate-600 text-center h-10 flex justify-center items-center'>
					{movie.Title}
				</p>
			</div>
		</>
	);
};

export default Movie;
