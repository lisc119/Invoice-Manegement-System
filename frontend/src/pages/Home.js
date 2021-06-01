import React, { Fragment, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from "react-redux";


const Home = () => {
	const history = useHistory();
    const token = useSelector((state) => state.user.token);

	useEffect(() => {
		if (token) {
			history.push("/dashboard")
		} else {
		history.push("/login")
		}
	}, [history]);

	return (
		<Fragment>
            <h1>Loading pages...</h1>
		</Fragment>
	);
};

export default Home;
