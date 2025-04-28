function App() {
	return (
		<div className='flex flex-col px-2 py-8 gap-y-4 bg-white max-w-[360px]'>
			{/* time number */}
			<div className='text-5xl font-bold text-slate-900 text-center'>5:00</div>

			{/* button */}
			<div className='flex gap-x-4 items-center justify-center [&>*]:cursor-pointer'>
				{/* start */}
				<button className='rounded-sm bg-green-600 text-white px-3 py-1 font-bold'>
					Start
				</button>
				{/* stop */}
				<button className='rounded-sm bg-red-600 text-white px-3 py-1 font-bold'>
					Stop
				</button>
				{/* reset */}
				<button className='rounded-sm bg-slate-300 text-slate-900 px-3 py-1 '>
					Reset
				</button>
			</div>
		</div>
	);
}

export default App;
