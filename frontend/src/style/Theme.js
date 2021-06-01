import { createGlobalStyle } from 'styled-components';

export const colors = {
    white: '#FFF',
	black: '#000',
	gray: '#C6D3DE',

	dimGray: 'rgba(0, 0, 0, .55)',
	// gradientBtn: 'linear-gradient(90deg, #ff64ba 0%, #7478f6)',

	blueDark: "#234E6F",
	blue: "#4D7593",
	blueLight: '#F6F7FB',
	blueLightBackground: '#E9EDF0',

	yellowDark: '#EFBA46',
	yellow: '#FFC74D',
	yellowLight: '#FFF4DB',

	red: '#FF6666',
	redLight : '#FFF4F4',
	redDifferent: '#EA498B',

	green: '#20BF69',
	turkis: '#2BD8D7',
	turkisLight: '#E6FAFA',
	violet: '#BC67FE',
};

export const GlobalStyle = createGlobalStyle`
	  *{
        margin: 0;
        padding: 0;
		box-sizing: border-box;
		font-family: 'Poppins', sans-serif;
		font-style: normal;
		font-weight: 350;
	} 

	body {
		background-color: ${colors.blueLightBackground};
		/*font-family: 'Poppins';*/
		/*max-width: 1600px;*/
		margin: 0 auto;
		height: 100vh;
	}

	a {
		text-decoration: none;
	}
`;

export const fontSizes = {
	small: '.8rem',
	normal: '1.2rem',
	medium: '1.5rem',
	large: '1.8rem',
	exLarge: '2.2rem',
};
