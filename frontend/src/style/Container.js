import { colors } from "../style/Theme";
import styled, { css } from 'styled-components';

export const Container = styled.section`
	margin: auto;
	overflow: hidden;
	padding: 0 2rem;
	width: 100%;


	@media (min-width: 576px) {
		.container {
			max-width: 540px;
		}
	}
	@media (min-width: 768px) {
		.container {
			max-width: 720px;
		}
	}
	@media (min-width: 992px) {
		.container {
			max-width: 960px;
		}
	}
	@media (min-width: 1200px) {
		.container {
			max-width: 1140px;
		}
	}
`;

export const StandardWindow = styled.section`
	background-color: ${colors.white};
	border-radius: 15px;
	margin: 15px;
	padding: 20px;
	color: ${colors.blue};
	/* max-height: 500px; */
`

export const MainBodyContainer = styled.div`
	display: flex;
	flex-direction: row;
	background-color: ${colors.blueLightBackground};

	${props => 
		props.Main &&
		css`
			display: flex;
			flex-direction: row;
			max-width: 1440px;
			margin: auto;
			/* margin-left: 30px;
			margin-right: 30px; */
	`}

	${props => 
		props.LeftColumn &&
		css`
			display: flex;
			flex-direction: column;
			min-width: 350px;
	`}

	${props => 
		props.RightColumn &&
		css`
			display: flex;
			flex-direction: column;
			width: 100%;
	`}

	${props => 
		props.Login &&
		css`
			border-radius: 20px;
			display: flex;
			flex-direction: row;
			width: 100%;
			justify-content: center;
			align-items: center;
	`}
`;

export const TitleDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    border-top: 2px solid ${colors.blue};
    padding-bottom: 5px;
    padding-top: 5px;
    border-bottom: 2px solid ${colors.gray};
    }

    .leftColumn {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        /* width: 180px; */
		max-width: 280px;
		width: 100%;


		.filterButton {
			display: flex;
			min-height: 120px;
			width: 100%;
			justify-content: center;
			align-items: flex-end;
		}
    }
    .rightColumn {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: flex-end;
    }
`;

export const ContainerTop = styled.div`
  width: 100%;
  height: 25px;
  background-color: ${colors.blueLightBackground};
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`

export const NavyBackground = styled.div`
  background-color: ${colors.blueDark};
`
