import { useRef } from 'react';
import { useState } from 'react';

function App() {
	const [timer, setTimer] = useState(300);
	const [isActive, setIsActive] = useState(false);
	const [isPaused, setIsPaused] = useState(true);
	const timerRef = useRef(null);

	const formatTime = (seconds) => {
		const mins = Math.floor(seconds / 60);
		const secs = seconds % 60;
		return `${mins.toString().padStart(2, '0')}:${secs
			.toString()
			.padStart(2, '0')}`;
	};

	const resetTime = () => {
		clearInterval(timerRef.current);
		setIsActive(false);
		setIsPaused(true);
		setTimer(300);
	};

	const toggleTimer = () => {
		if (isActive && !isPaused) {
			clearInterval(timerRef.current);
			setIsPaused(true);
		} else {
			//start atau lanjutkan timer
			setIsActive(true);
			setIsPaused(false);
			timerRef.current = setInterval(() => {
				setTimer((prevTime) => {
					if (prevTime <= 0) {
						clearInterval(timerRef.current);
						return 0;
					}
					return prevTime - 1; // kurangin 1 detik
				});
			}, 1000);
		}
	};

	const stopTimer = () => {
		clearInterval(timerRef.current);
		setIsActive(false);
		setIsPaused(true);
	};

	return (
		<div className='flex flex-col px-2 py-8 gap-y-4 bg-white max-w-[360px]'>
			{/* time number */}
			<div className='text-5xl font-bold text-slate-900 text-center'>
				{formatTime(timer)}
			</div>

			{/* button */}
			<div className='flex gap-x-4 items-center justify-center [&>*]:cursor-pointer'>
				{/* start dan pause */}
				<button
					onClick={toggleTimer}
					className='rounded-sm bg-green-600 text-white px-3 py-1 font-bold'>
					{!isActive ? 'Start' : isPaused ? 'Resume' : 'Pause'}
				</button>
				{/* stop */}
				<button
					onClick={stopTimer}
					className='rounded-sm bg-red-600 text-white px-3 py-1 font-bold'>
					Stop
				</button>
				{/* reset */}
				<button
					onClick={resetTime}
					className='rounded-sm bg-slate-300 text-slate-900 px-3 py-1 '>
					Reset
				</button>
			</div>
		</div>
	);
}

export default App;
