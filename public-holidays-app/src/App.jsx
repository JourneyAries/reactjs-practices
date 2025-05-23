import { useEffect, useState } from 'react';
import InputSearch from './components/InputSearch';
import ListContent from './components/ListContent';
import { fetchHoliday, getCountries } from './api';
import DropDownSearch from './components/DropDownSearch';

function App() {
	const [input, setInput] = useState('');
	const [countries, setCountries] = useState([]);
	const [term, setTerm] = useState('DE');
	const [data, setData] = useState(null);

	useEffect(() => {
		fetchHoliday(term).then((response) => {
			const holidaysWithEN = response.map((holiday) => ({
				...holiday,
				name: holiday.name.find((n) => n.language === 'EN').text,
			}));
			setData(holidaysWithEN);
		});
	}, [term]);

	useEffect(() => {
		getCountries().then((data) => {
			setCountries(data);
		});
	}, []);

	return (
		<div className='max-w-[360px] mx-auto px-4 py-8 flex flex-col gap-y-8 bg-white rounded'>
			<InputSearch input={input} setInput={setInput} setTerm={setTerm} />
			<DropDownSearch term={term} setTerm={setTerm} countries={countries} />
			<ListContent data={data} />
		</div>
	);
}

export default App;
