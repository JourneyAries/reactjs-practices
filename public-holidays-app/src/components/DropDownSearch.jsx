import React, { useState } from 'react';

const DropDownSearch = ({ term, setTerm, countries }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<form className='p-4 border border-slate-300 bg-slate-100 flex items-center gap-x-2 rounded relative'>
			<select
				value={term}
				onChange={(e) => setTerm(e.target.value)}
				onClick={() => setIsOpen(!isOpen)}
				className='appearance-none w-full'>
				{countries.map((country) => (
					<option key={country.isoCode} value={country.isoCode}>
						{country.name}
					</option>
				))}
			</select>
			<div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
				<svg
					className={`fill-current h-4 w-4 transition-transform duration-300 ${
						isOpen ? 'rotate-180' : ''
					}`}
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 20 20'>
					<path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
				</svg>
			</div>
		</form>
	);
};

export default DropDownSearch;
