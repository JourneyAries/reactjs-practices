import { useEffect, useState } from 'react';
import InputSearch from './components/InputSearch';
import ListContent from './components/ListContent';
import { fetchHoliday } from './api';

function App() {
	const [input, setInput] = useState('');
	const [term, setTerm] = useState('DE');
	const [data, setData] = useState(null);

	useEffect(() => {
		fetchHoliday(term).then((response) => {
			const holidaysWithEN = response.data.map((holiday) => ({
				...holiday,
				name: holiday.name.find((n) => n.language === 'EN').text,
			}));
			setData(holidaysWithEN);
		});
	}, [term]);

	return (
		<div className='max-w-[360px] mx-auto px-4 py-8 flex flex-col gap-y-8 bg-white rounded-l'>
			<InputSearch input={input} setInput={setInput} setTerm={setTerm} />
			<ListContent data={data} />
		</div>
	);
}

export default App;
