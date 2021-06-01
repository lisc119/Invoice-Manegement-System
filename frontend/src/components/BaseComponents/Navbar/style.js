import { colors, fontSizes } from "../../../style/Theme";
import styled from 'styled-components';



///////////////////////// GENERAL/////////////////////////

export const NavbarWrapper = styled.nav`
	width: 100%;
	padding: 0 60px;
	height: 140px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background: ${colors.blueDark} !important;
`;

///////////////////////// LEFT ///////////////////////////

export const NavbarLeft = styled.nav`
	width: 17%;
	.logo {
		width: 180px;
	};
`;

///////////////////////// MIDDLE /////////////////////////

export const NavbarMiddle = styled.nav`

`;

// export const NavbarTopWrapper = styled.nav`
// 	width: 100%;
// 	padding-top: 35px;
// 	height: 80px;
// 	display: flex;
// 	align-items: center;
// `;

export const NavbarTopWrapper = styled.nav`
	width: 100%;
	min-width: 500px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 100%;
	img{
	    padding-right: 12px;
	}

	.dashboardLink,
	.dataLink,
	.analysisLink,
	.settingsLink {
		display: flex;
		align-items: center;
		font-size: ${fontSizes.large};
		color: ${colors.white};
		margin: 15px;
		//padding: 5px;
		height: 100%;
		border-bottom: 3px solid transparent;
	}

	.dashboardLink:hover,
	.dataLink:hover,
	.analysisLink:hover,
	.settingsLink:hover {
		border-bottom: 3px solid ${colors.yellow};
		transition: linear .09s;
	}

	.active {
		border-bottom: 3px solid ${colors.yellow};
	}
`;

///////////////////////// RIGHT //////////////////////////

export const NavbarRight = styled.nav`
    width: 17%;
    .Icon {
		width: 25px;
		height: 25px;
		margin-left: 40px;
	}
`;







//////////////////////////////////////////////////////////









export const NavbarBottom = styled.nav`
	/* width: 50%; */
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: ${fontSizes.normal};
	margin-top: 5px;
	height: 50px;

	.timeLink:hover {
		background-color: ${colors.blue};
		border-radius: 7px;
	}
	.timeLink {
		display: flex;
		margin-left: 20px;
		justify-content: center;
		align-items: center;
		font-size: ${fontSizes.normal};
		color: ${colors.white};
		padding: 0.5rem;
		height: 100%;
		border-bottom: 3px solid transparent;
		min-width: 80px;
	}

	.active {
		background-color: ${colors.blue};
		border-radius: 7px;
	}

`;

export const BtnsWrapper = styled.div`
	display: flex;
	flex-direction: row;
	font-size: 0.7rem;
	padding-left: 200px;

	.Icon {
		width: 25px;
		height: 25px;
		margin-left: 40px;
	}

`;

export const DateModalDiv = styled.div`
	margin-top: 0;
	padding-left: 60px;
	width: 198px;
	min-height: 155px;
	border: 2px solid ${colors.blue};
	border-radius: 10px;
	background-color: ${colors.white};
	position: relative;
	top: 6px;
	left: 350px;
	z-index: 2;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	.dates {
		width: 220px;
		margin-left: 13px;
		margin-top: 17px;
		margin-bottom: 0;
	}

`;

