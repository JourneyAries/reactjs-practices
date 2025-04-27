function App() {
	return (
		<div className='max-w-[360px] flex flex-col px-2 py-8 gap-y-4 bg-white [&>*]:select-none m-auto'>
			{/* header */}
			<div className='flex flex-col gap-y-2'>
				{/* heading */}
				<h1 className='text-xl text-slate-900 font-bold'>Movie Search Page</h1>

				{/* form input */}
				<form onSubmit={() => {}} className='flex gap-x-3 [&>*]:cursor-pointer'>
					<input
						type='text'
						placeholder='Search here...'
						value={''}
						onChange={() => {}}
						className='text-sm grow rounded-sm p-1 border border-slate-300 text-slate-600'
					/>
					<button
						type='submit'
						className='rounded p-2 bg-slate-300 text-slate-900 text-sm'>
						Search
					</button>
				</form>
			</div>

			{/* body */}
			<div className='grid grid-cols-2 gap-2'>
				{/* card */}
				<div className='flex flex-col rounded-sm p-2 gap-y-2 bg-slate-100'>
					<img
						src={'https://dummyimage.com/152.jpg'}
						className=' w-[152px] rounded-sm'
					/>
					<p className='text-sm text-slate-600 text-center h-10 flex justify-center items-center'>
						Castlevania Nocturne
					</p>
				</div>
			</div>
		</div>
	);
}

export default App;
