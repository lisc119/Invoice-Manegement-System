import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

export const authHOC = (WrappedComponent) => {
  return () => {
    const token = useSelector((state) => state.user.token);
    // console.log('in authHOC, token: ', token);

    const history = useHistory();
    if (token) {
      return <WrappedComponent />;
    } else {
      history.push("/login");
      return null;
    }
  };
};

