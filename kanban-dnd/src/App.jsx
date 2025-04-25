import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
	const [inputValue, setInputValue] = useState('');
	const [todoList, setTodoList] = useState([]);

	useEffect(() => {
		console.log(todoList);
	}, [todoList]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (inputValue.trim()) {
			setTodoList([
				...todoList,
				{ id: uuidv4(), text: inputValue, status: 'to-do' },
			]);
		}
		setInputValue('');
	};

	return (
		<div className='bg-white max-w-[360px] px-4 py-8 flex flex-col gap-y-8 [&>*]:select-none m-auto'>
			{/* header */}
			<div className='flex flex-col gap-y-4'>
				{/* heading */}
				<h1 className='text-xl text-slate-900 font-bold'>To Do List</h1>
				{/* input to do list */}
				<form className='flex gap-x-3' onSubmit={handleSubmit}>
					<input
						className='cursor-pointer grow p-2 rounded-sm border border-slate-400 text-sm text-slate-600'
						type='text'
						placeholder='Add a new todo'
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
					/>
					<button
						className='cursor-pointer p-2 rounded-sm text-sm bg-slate-300 text-slate-900'
						type='submit'>
						Add List
					</button>
				</form>
			</div>

			{/* body */}
			<div className='flex flex-col gap-y-4'>
				{/* to-do */}
				<div className='flex flex-col p-2 gap-y-2 bg-slate-100 rounded'>
					{/* heading */}
					<h2 className='text-slate-900 font-bold'>To-do</h2>
					{/* list */}
					<ul className='flex flex-col gap-y-2'>
						<li className='cursor-pointer rounded-sm px-4 py-3 bg-white text-slate-900 '>
							Grow email list
						</li>
						<li className='cursor-pointer rounded-sm px-4 py-3 bg-white text-slate-900 '>
							Update navigation
						</li>
						{todoList.map((item) => (
							<li
								key={item.id}
								className='cursor-pointer rounded-sm px-4 py-3 bg-white text-slate-900 '>
								{item.text}
							</li>
						))}
					</ul>
				</div>

				{/* in-progress */}
				<div className='flex flex-col p-2 gap-y-2 bg-blue-100 rounded'>
					{/* heading */}
					<h2 className='text-blue-800 font-bold'>In-progress</h2>
					{/* list */}
					<ul className='flex flex-col gap-y-2'>
						<li className='cursor-pointer rounded-sm px-4 py-3 text-slate-500 border border-slate-400 border-dashed text-sm '>
							No task here yet
						</li>
					</ul>
				</div>

				{/* done */}
				<div className='flex flex-col p-2 gap-y-2 bg-green-100 rounded'>
					{/* heading */}
					<h2 className='text-green-800 font-bold'>Done</h2>
					{/* list */}
					<ul className='flex flex-col gap-y-2'>
						<li className='cursor-pointer rounded-sm px-4 py-3 text-slate-500 border border-slate-400 border-dashed text-sm '>
							No task here yet
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default App;
