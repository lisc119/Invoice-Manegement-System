import styled from 'styled-components';
import { colors, fontSizes } from './Theme';

export const InvoiceForm = styled.form`
	display: flex;
    flex-direction: column;
	align-items: flex-start;
    width: 100%;
    border-top: 2px solid ${colors.blue};
    padding-top: 5px;
`;

export const NiceInput = styled.input`
	background-color: ${colors.white};
	border-radius: 8px;
	padding: 0.8rem;
	font-size: ${fontSizes.normal};
	height: 46px;
	width: 140px;
	z-index: 1;
	border: 1px solid ${colors.blue};
	outline: none;
	position: relative;

	${props => {
		if (props.searchBar) {
			return `
			height: 100%;
			border-radius: 0;
			padding: .8rem;
			background: #fff;
			font-size: ${props.theme.fontNormal};
			font-weight: bold;
			letter-spacing: .04rem;
			color: rgba(0, 0, 0, .75);
				::placeholder {
					color: rgba(0,0,0,.35);
				}
				&.hide-on-focus:focus {
				::-webkit-input-placeholder {
				color: white;
  }

			`;
		}
	}}

	${props => {
		if (props.restaurantProfileFilter) {
			return `
			width: 82%;
			padding: .8rem;
			margin: .8rem;
			background: #fff;
			font-size: ${props.theme.fontNormal};
			font-weight: bold;
			height: 35px;
			letter-spacing: .04rem;
			border: 1px solid rgba(0, 0, 0, .15);
			color: rgba(0, 0, 0, .75);
				::placeholder {
					color: rgba(0,0,0,.35);
				}
				&.hide-on-focus:focus {
				::-webkit-input-placeholder {
				color: white;
  				}
			`;
		}
	}}

`;
