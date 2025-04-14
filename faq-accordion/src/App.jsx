import { FiMinus, FiPlus } from 'react-icons/fi';
import { items } from './data/data';
import { useState } from 'react';

function App() {
	const [openIndex, setOpenIndex] = useState(null);

	const toggleItem = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<div className='max-w-[360px] flex flex-col gap-y-3 bg-white rounded px-2 py-4'>
			{items.map((item, index) => {
				const isOpen = openIndex === index;
				return (
					<details
						open={isOpen}
						className={` group ${
							isOpen ? 'border-b-3 border-amber-600' : 'border-b-1'
						}`}
						key={index}>
						<summary
							className='text-lg text-slate-900 font-bold list-none flex justify-between items-start cursor-pointer py-1'
							onClick={(e) => {
								e.preventDefault();
								toggleItem(index);
							}}>
							<span className='group-open:italic'>{item.title}</span>
							<span
								className={`text-2xl transition-transform duration-300 group-open:rotate-180 `}>
								{isOpen ? <FiMinus /> : <FiPlus />}
							</span>
						</summary>
						<p className='text-sm text-slate-900 pb-2'>{item.content}</p>
					</details>
				);
			})}
		</div>
	);
}

export default App;
