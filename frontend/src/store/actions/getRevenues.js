import baseUrl from '../../helper/url_helper';

export const getRevenuesAction = (token) => async (dispatch, getState) => {
    // const { token } = getState();
    // const accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjA1NDM0MzYxLCJqdGkiOiI5MTY2MTBkMDNjZGU0YWNiOTYxYzk5Njk2MmFhOTUyZSIsInVzZXJfaWQiOjF9.RSsWyHlSTsuJ8Cmj-0raDP5465KcUS1BGDhJwKoUKqQ";
    const url = `${baseUrl}revenues/`;
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

export default getRevenuesAction;
