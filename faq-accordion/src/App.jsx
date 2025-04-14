import { FiMinus, FiPlus } from 'react-icons/fi';
import { items } from './data/data';

function App() {
	return (
		<div className='max-w-[360px] flex flex-col gap-y-3 bg-white rounded px-2 py-4'>
			{items.map((item, index) => {
				return (
					<details
						className='group border-b-1 open:border-b-3 open:border-amber-600'
						key={index}>
						<summary className='text-lg text-slate-900 font-bold list-none flex justify-between items-start cursor-pointer py-1'>
							<span className='group-open:italic'>{item.title}</span>
							<span
								className={`text-2xl transition-transform duration-300 group-open:rotate-180 `}>
								<FiPlus className='group-open:hidden block' />
								<FiMinus className='group-open:block hidden' />
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
