import baseUrl from '../../helper/url_helper';

export const newArticleAction = (itemName, price2, quantity2, tag2, id2, token) => async (dispatch, getState) => {
    const url = `${baseUrl}articles/new/`;
	const config = {
		method: 'POST',
		headers: new Headers({
            // Accept: 'application/json',
            "Content-Type": "application/json",
			"Authorization": `Bearer ${ token }`,
        }),
        body: JSON.stringify({ item: itemName, price: price2, quantity: quantity2, tag: tag2, invoice: id2 })
	};
	await fetch(url, config);
	return;
};

export default newArticleAction;
