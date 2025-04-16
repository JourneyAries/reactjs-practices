function App() {
	return (
		<div className='max-w-[360px] py-8 px-4 bg-white flex flex-col gap-8'>
			<h1 className='text-slate-900 text-center text-lg font-bold'>
				Memory Game
			</h1>
			<div className='grid grid-cols-3 gap-5'>
				<img
					src=''
					className='bg-slate-300 rounded hover:bg-teal-400'
					width={96}
					height={96}
				/>
				<img
					src=''
					className='bg-slate-300 rounded hover:bg-teal-400'
					width={96}
					height={96}
				/>
				<img
					src=''
					className='bg-slate-300 rounded hover:bg-teal-400'
					width={96}
					height={96}
				/>
				<img
					src=''
					className='bg-slate-300 rounded hover:bg-teal-400'
					width={96}
					height={96}
				/>
				<img
					src=''
					className='bg-slate-300 rounded hover:bg-teal-400'
					width={96}
					height={96}
				/>
				<img
					src=''
					className='bg-slate-300 rounded hover:bg-teal-400'
					width={96}
					height={96}
				/>
			</div>
			<p className='text-center'>Hits: 0</p>
		</div>
	);
}

export default App;
