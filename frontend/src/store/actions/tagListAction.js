import baseUrl from '../../helper/url_helper';

export const tagListAction = (dispatch, getState) => {
    const token = getState().user.token;
    const url = `${baseUrl}tags/`;
    fetch(url, {
      headers: new Headers({
        Authorization: `Bearer ${token}`,
      }),
    })
      .then((r) => r.json())
      .then((data) => {
        dispatch({
          type: "SET_TAG",
          tags: data,
        });
      });
  };
  