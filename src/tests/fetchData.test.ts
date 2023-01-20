import { describe, it, expectTypeOf, expect } from 'vitest';
import { fetchData } from '#libs/fetchData'

describe('fetch data', () => {
	const paramsArr = [
		['ml', 'lol'],
		['max', '10'],
	];
	const url = new URL('https://api.datamuse.com/words');
	const urlParams = new URLSearchParams(paramsArr).toString();

	url.search = urlParams;

	it('shoulds be a function', () => {
		expectTypeOf(fetchData).toBeFunction();
	});

	it('shoulds be a correct parameter', () => {
		expect(urlParams).toEqual('ml=lol&max=10');
	});

	it('shoulds be a correct link', () => {
		expect(url.href).toEqual('https://api.datamuse.com/words?ml=lol&max=10');
	})
});
