import baseUrl from '../../helper/url_helper';

export const getInvoiceAction = (id, token) => async (dispatch, getState) => {
    const url = `${baseUrl}invoices/${id}/`;
	const config = {
		method: 'GET',
		headers: new Headers({
            // Accept: 'application/json',
            "Content-Type": "application/json",
			"Authorization": `Bearer ${ token }`,
        }),
	};
	const response = await fetch(url, config);
	const data = await response.json();
	return data;
};

export default getInvoiceAction;
