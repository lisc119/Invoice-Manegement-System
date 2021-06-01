import baseUrl from '../../helper/url_helper';

export const getLatestAction = ( token ) => async (dispatch, getState) => {
	let url = `${baseUrl}invoices/latest/8/`;
	const config = {
		method: 'GET',
		headers: new Headers({
			Accept: 'application/json',
			Authorization: `Bearer ${ token }`,
		}),
	};
	const response = await fetch(url, config);
	const data = await response.json();
	return data;
};

export default getLatestAction;