import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import Navbar from '../components/BaseComponents/Navbar';
import FiltersAnalysis from '../components/Analysis/filters';
import { ContainerTop, MainBodyContainer, NavyBackground } from '../style/Container';

const Analysis = () => {

	let currentlyActive = useSelector(state => state.subWindow.window);

	return (
		<Fragment>
			<Navbar props={"analysis"} />
			<NavyBackground>
                <ContainerTop />
            </NavyBackground>
			<MainBodyContainer Main>
				{currentlyActive === 'filter' ? <FiltersAnalysis /> : null }
			</MainBodyContainer>
		</Fragment>
	);
};

export default Analysis;