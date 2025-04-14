import React from 'react';
import { BiSearch } from 'react-icons/bi';

const InputSearch = ({ input, setInput, setTerm }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		if (input.trim()) {
			setTerm(input.trim());
			setInput('');
		}
	};
	return (
		<form
			className='p-4 border border-slate-300 bg-slate-100 flex items-center gap-x-2 rounded'
			onSubmit={handleSubmit}>
			<input
				className='w-full focus-hi'
				onChange={(e) => setInput(e.target.value)}
				type='text'
				name='country'
				placeholder='Search here..'
			/>
			<button type='submit' className='cursor-pointer' onClick={handleSubmit}>
				<BiSearch className='text-xl' />
			</button>
		</form>
	);
};

export default InputSearch;
