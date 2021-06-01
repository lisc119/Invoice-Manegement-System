import styled from 'styled-components';

export const Title = styled.section`
	width: 100%;
	text-align: center;
	color: rgba(0, 0, 0, 0.55);
	font-size: ${props => props.theme.fontLarge};
	font-weight: bold;
	/* background-color: yellow; */

	/* HomePage */
	.title-best-rated {
		margin: 60px auto;
		text-align: center;
		padding-bottom: 8px;
		width: 20%;
		text-transform: uppercase;
		position: relative;
	}

	.title-best-rated:before {
		content: '';
		position: absolute;
		width: 55%;
		height: 1px;
		bottom: 0;
		left: 25%;
		border-bottom: 2px solid ${props => props.theme.orangeMain};
	}

	/* Search Page */
	.search-navigation-links {
		width: 50%;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		margin: 60px auto;
		font-weight: bold;
		text-transform: uppercase;
		padding-bottom: 10px;
		position: relative;
		/* background-color: green; */
	}
	.search-link {
		border-bottom: 4px solid transparent;
		padding: 4px 20px;
		cursor: pointer;
	}

	.search-link:hover {
		border-bottom: 4px solid ${props => props.theme.orangeMain};
		transition: linear 0.12s;
	}

	.active {
		border-bottom: 3px solid ${props => props.theme.orangeMain};
		color: ${props => props.theme.linkActive};
	}

	.search-navigation-links:after {
		content: '';
		position: absolute;
		width: 100%;
		height: 2px;
		bottom: 9px;
		left: 0;
		border-bottom: 1px solid rgba(0, 0, 0, 0.25);
	}
`;
