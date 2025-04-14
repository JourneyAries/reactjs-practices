import { useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi';

function App() {
	const [input, setInput] = useState('');
	const [term, setTerm] = useState('DE');
	const [data, setData] = useState(null);

	useEffect(() => {
		fetch(
			`https://openholidaysapi.org/PublicHolidays?countryIsoCode=${term}&validFrom=2023-01-01&validTo=2023-12-31`,
		)
			.then((res) => res.json())
			.then((datas) => {
				const holidaysWithEN = datas.map((holiday) => ({
					...holiday,
					name: holiday.name.find((n) => n.language === 'EN').text,
				}));
				setData(holidaysWithEN);
			});
	}, [term]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (input.trim()) {
			setTerm(input.trim());
			setInput('');
		}
	};
	return (
		<div className='max-w-[360px] mx-auto px-4 py-8 flex flex-col gap-y-8 bg-white rounded-l'>
			<form
				className='p-4 border border-slate-300 bg-slate-100 flex items-center gap-x-2 rounded-l'
				onSubmit={handleSubmit}>
				<input
					className='w-full '
					onChange={(e) => setInput(e.target.value)}
					type='text'
					name='country'
					placeholder='Search here..'
				/>
				<button type='submit' className='cursor-pointer' onClick={handleSubmit}>
					<BiSearch className='text-xl' />
				</button>
			</form>
			<ul className='flex flex-col gap-2'>
				{data &&
					data.map((holiday, index) => (
						<li key={index}>
							{`${holiday.startDate} - `}
							<span className='font-bold italic'>{holiday.name}</span>
						</li>
					))}
			</ul>
		</div>
	);
}

export default App;
