import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../components/BaseComponents/Navbar';
import NewInvoice from '../components/DataP/newInvoice';
import EditInvoice from '../components/DataP/editInvoice';
import Upload from '../components/DataP/upload';

import { ContainerTop, MainBodyContainer, NavyBackground } from '../style/Container';


const Data = () => {

	let currentlyActive = useSelector(state => state.subWindow.window)
	let token = useSelector(state => state.user.token)

	return (
		<Fragment>
            <Navbar props={"data"} />
			<NavyBackground>
                <ContainerTop />
            </NavyBackground>
			<MainBodyContainer Main>
				{currentlyActive === 'new' ? <NewInvoice token={token}/> : null }
				{currentlyActive === 'edit' ? <EditInvoice token={token}/> : null }
				{currentlyActive === 'upload' ? <Upload token={token}/> : null }
			</MainBodyContainer>
		</Fragment>
	);
};

export default Data;