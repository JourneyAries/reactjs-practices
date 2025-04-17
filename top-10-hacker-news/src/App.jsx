import { BiCalendarCheck, BiUpvote } from 'react-icons/bi';
import { useEffect, useState } from 'react';
import { getTopNews } from './api';
import { format } from 'date-fns';

function App() {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		getTopNews().then((articles) => {
			setArticles(articles);
			console.log(articles);
		});
	}, []);

	return (
		<div className='max-w-[480px] py-4 px-8 flex flex-col gap-y-8 bg-white'>
			<h1 className='text-slate-600 w-full text-center text-xl font-bold'>
				Top 10 Hacker News
			</h1>
			<div className='flex flex-col gap-4'>
				{articles.map((article) => {
					return (
						<div className='bg-slate-100 rounded py-3 px-4 flex flex-col gap-y-3'>
							<div className='text-sm text-slate-600 flex justify-between'>
								<p>by {article.by}</p>
								<span className='flex flex-row gap-2'>
									<span className='flex flex-row gap-1 items-center'>
										<p>{format(new Date(article.time * 1000), 'MMM dd, yy')}</p>
										<BiCalendarCheck />
									</span>
									<span className='flex flex-row gap-1 items-center'>
										<p>+ {article.score}</p>
										<BiUpvote />
									</span>
								</span>
							</div>
							<h2 className='font-bold text-xl'>{article.title}</h2>
							<a
								href='#'
								className='w-fit font-bold bg-teal-400 text-black rounded-sm py-2 px-3 hover:bg-teal-200'>
								Read More
							</a>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default App;
