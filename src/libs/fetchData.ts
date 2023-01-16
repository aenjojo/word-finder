export type fetchResult = {
	word: string,
	score: number,
	tags: string[],
}[];

export async function fetchData(url: string, params?: [string, string][]) {
	const fetchUrl = new URL(url);
	const urlParams = new URLSearchParams(params)

	fetchUrl.search = urlParams.toString();

	const response = await fetch(fetchUrl, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	});

	return response.json();
}