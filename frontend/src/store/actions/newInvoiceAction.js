import baseUrl from '../../helper/url_helper';

export const newInvoiceAction = (date2, shop2, token) => async (dispatch, getState) => {
    const url = `${baseUrl}invoices/new/`;
	const config = {
		method: 'POST',
		headers: new Headers({
            // Accept: 'application/json',
            "Content-Type": "application/json",
			"Authorization": `Bearer ${ token }`,
        }),
        body: JSON.stringify({ date: date2, shop: shop2, restaurant: 1 })
	};
	const response = await fetch(url, config);
	const data = await response.json();
	return data;
};

export default newInvoiceAction;
