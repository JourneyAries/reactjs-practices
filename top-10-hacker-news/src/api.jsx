import axios from 'axios';

const fetchArticleDetail = async (id) => {
	const articleResponse = await axios.get(
		`https://hacker-news.firebaseio.com/v0/item/${id}.json`,
	);
	return articleResponse.data;
};

export const getTopNews = async () => {
	try {
		const responses = await axios.get(
			'https://hacker-news.firebaseio.com/v0/topstories.json',
		);

		const topTenIds = responses.data.slice(0, 10);

		const articles = await Promise.all(
			topTenIds.map((id) => fetchArticleDetail(id)),
		);

		return articles;
	} catch (error) {
		console.error(error);
	}
};
