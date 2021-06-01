import baseUrl from '../../helper/url_helper';

export const tagCreateAction = function (body) {
    return (dispatch, getState) => {
      const token = getState().user.token;
      const url = `${baseUrl}tags/new/`;
  
      const config = {
        method: "POST",
        headers: new Headers({
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        }),
        body: JSON.stringify(body),
      };
  
      fetch(url, config)
        .then((r) => r.json())
        .then((data) => {
          dispatch({
            type: "ADD_TAG",
            tags: data,
          });
        });
    };
  };
  