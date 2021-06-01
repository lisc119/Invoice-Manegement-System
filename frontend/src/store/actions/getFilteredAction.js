import baseUrl from '../../helper/url_helper';

export const getFilteredAction = ( start, end, tag, token, search ) => async (dispatch, getState) => {
	const url = `${baseUrl}articles/date/${start}/${end}/`;
	const config = {
		method: 'GET',
		headers: new Headers({
			Accept: 'application/json',
			Authorization: `Bearer ${ token }`,
		}),
	};
	const response = await fetch(url, config);
	const data = await response.json();
	return data.filter((art) => art.item == search || search == "");
};

export default getFilteredAction;