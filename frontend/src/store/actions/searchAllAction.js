import baseUrl from '../../helper/url_helper';

export const searchAllAction = ( search, token ) => async (dispatch, getState) => {
	let url = `${baseUrl}restaurants/search/?search=${search}`;
	const config = {
		method: 'POST',
		headers: new Headers({
			Accept: 'application/json',
			Authorization: `Bearer ${ token }`,
		}),
	};
    const response = await fetch(url, config);
	const data = await response.json();
	return data;
};

export default searchAllAction;