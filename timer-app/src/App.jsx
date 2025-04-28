import { useRef, useState, useEffect } from 'react';

function App() {
	const minutesToMs = (minutes) => minutes * 60 * 1000;

	const [timer, setTimer] = useState(minutesToMs(5));
	const [isActive, setIsActive] = useState(false);
	const [isPaused, setIsPaused] = useState(true);
	const [targetTime, setTargetTime] = useState(null);
	const timerRef = useRef(null);

	const formatTime = (milliseconds) => {
		const totalSeconds = Math.floor(milliseconds / 1000);
		const mins = Math.floor(totalSeconds / 60);
		const secs = totalSeconds % 60;
		return `${mins.toString().padStart(2, '0')}:${secs
			.toString()
			.padStart(2, '0')}`;
	};

	useEffect(() => {
		// Cleanup interval on unmount
		return () => {
			if (timerRef.current) {
				clearInterval(timerRef.current);
			}
		};
	}, []);

	useEffect(() => {
		if (timer <= 0 && isActive) {
			clearInterval(timerRef.current);
			setIsActive(false);
			setIsPaused(true);
		}
	}, [timer, isActive]);

	const startTimer = () => {
		setIsActive(true);
		setIsPaused(false);
		const newTargetTime = Date.now() + timer;
		setTargetTime(newTargetTime);

		if (timerRef.current) clearInterval(timerRef.current);

		timerRef.current = setInterval(() => {
			setTimer((prev) => {
				const remaining = newTargetTime - Date.now();
				if (remaining <= 0) {
					clearInterval(timerRef.current);
					setIsActive(false);
					setIsPaused(true);
					return 0;
				}
				return remaining;
			});
		}, 1000);
	};

	const pauseTimer = () => {
		clearInterval(timerRef.current);
		setIsPaused(true);
	};

	const resumeTimer = () => {
		if (timer <= 0) return;

		const newTargetTime = Date.now() + timer;
		setTargetTime(newTargetTime);
		setIsPaused(false);

		if (timerRef.current) clearInterval(timerRef.current);

		timerRef.current = setInterval(() => {
			setTimer((prev) => {
				const remaining = newTargetTime - Date.now();
				if (remaining <= 0) {
					clearInterval(timerRef.current);
					setIsActive(false);
					setIsPaused(true);
					return 0;
				}
				return remaining;
			});
		}, 1000);
	};

	const resetTime = () => {
		clearInterval(timerRef.current);
		setTimer(minutesToMs(5));
		setTargetTime(null);
		setIsActive(false);
		setIsPaused(true);
	};

	const stopTimer = () => {
		clearInterval(timerRef.current);
		setIsActive(false);
		setIsPaused(true);
	};

	const toggleTimer = () => {
		if (!isActive) {
			startTimer();
		} else if (isPaused) {
			resumeTimer();
		} else {
			pauseTimer();
		}
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
