import baseUrl from '../../helper/url_helper';

export const getAllAction = (token) => async (dispatch, getState) => {
  	const url = `${baseUrl}restaurants/1/`;
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

export default getAllAction;
