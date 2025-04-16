import { useState } from 'react';
import { images } from './data/data';

import _ from 'lodash';

function App() {
	const [flippedCards, setFlippedCards] = useState([]);
	const [matchedCards, setMatchedCards] = useState([]);
	const [isHit, setIsHit] = useState(0);
	const [shuffledImages] = useState(() => _.shuffle([...images]));

	const handleClick = (index) => {
		if (
			flippedCards.includes(index) ||
			matchedCards.includes(index) ||
			flippedCards.length >= 2
		) {
			return;
		}

		const newFlippedCards = [...flippedCards, index];
		setFlippedCards(newFlippedCards);
		setIsHit((prev) => prev + 1);

		if (newFlippedCards.length === 2) {
			const [firstIndex, secondIndex] = newFlippedCards;
			if (shuffledImages[firstIndex] === shuffledImages[secondIndex]) {
				setMatchedCards((prev) => {
					const newMatched = [...prev, firstIndex, secondIndex];
					console.log('Current Matched Cards: ', newMatched);
					return newMatched;
				});
				setFlippedCards([]);
			} else {
				setTimeout(() => {
					setFlippedCards([]);
				}, 1000);
			}
		}

		console.log('Clicked Cards: ', index);
		console.log('Current Flipped Cards: ', flippedCards);
		console.log('Current New Flipped Cards: ', newFlippedCards);
	};

	return (
		<div className='max-w-[360px] py-8 px-4 bg-white flex flex-col gap-8'>
			<h1 className='text-slate-900 text-center text-lg font-bold'>
				Memory Game
			</h1>
			<div className='grid grid-cols-3 gap-5'>
				{shuffledImages.map((image, index) => {
					const isFlipped = flippedCards.includes(index);
					const isMatched = matchedCards.includes(index);
					return (
						<div
							onClick={() => handleClick(index)}
							key={index}
							className='group relative w-[96px] h-[96px] rounded overflow-hidden bg-slate-300'>
							{isFlipped || isMatched ? (
								<img
									src={image}
									className='static w-full h-full object-cover'
								/>
							) : (
								<div className='absolute bg-teal-500 w-full h-full hidden group-hover:block cursor-pointer'></div>
							)}
						</div>
					);
				})}
			</div>
			<p className='text-center'>Hits: {isHit}</p>
		</div>
	);
}

export default App;
