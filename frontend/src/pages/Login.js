import React, { Fragment } from 'react';
import LoginLogic from '../components/Login';
import { MainBodyContainer } from '../style/Container';

import LoginFooter from '../components/BaseComponents/Footer';

const Login = () => {

	return (
		<Fragment>
			<MainBodyContainer Login>
				<LoginLogic/>
			</MainBodyContainer>
			<LoginFooter/>
		</Fragment>
	);
};

export default Login;