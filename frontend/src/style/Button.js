import styled from 'styled-components';
import {colors} from "./Theme";

export const YellowButton = styled.button`
    height: 55px;
    background-color: ${colors.yellow};
    border-radius: 18px;
    border: solid 2px ${colors.yellow};
    box-sizing: border-box;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    color: ${colors.blueDark};
    text-align: center;
    transition: linear 0.5s;
    :hover {
    	border: solid 2px ${colors.blueDark};
	    transition: linear 0.5s;
	 	}
`;


// export const Btn = styled.button`
// 	appearance: none;
// 	outline: none;
// 	font-size: ${props => props.theme.fontMedium};
// 	padding: 12px 28px;
// 	border-radius: 100px;
// 	border: 2px solid ${props => props.theme.orangeMain};
// 	cursor: pointer;
//
// 	${props => {
// 		if (props.showcase) {
// 			return `
// 			color: ${colors.white};
// 			background: ${props.theme.orangeMain};
// 			position: relative;
// 			padding: 12px 46px;
// 			z-index: 1;
// 			margin-left: 12px;
// 			`;
// 		}
// 	}}
//
// 	${props => {
// 		if (props.btnLike) {
// 			return `
// 			background: #b3b3b3;
// 			font-size: 1rem;
// 			color: #fff;
// 			border: 1px solid ${colors.white};
// 			padding: 8px 15px;
// 			border-top-right-radius: 0;
// 			border-bottom-right-radius: 0;
// 			`;
// 		}
// 	}}
//
// 	${props => {
// 		if (props.btnComment) {
// 			return `
// 			background: #b3b3b3;
// 			font-size: 1rem;
// 			color: #fff;
// 			padding: 8px 15px;
// 			border: 1px solid ${colors.white};
// 			outline: none;
// 			border-top-left-radius: 0;
// 			border-bottom-left-radius: 0;
// 			cursor: pointer;
// 			`;
// 		}
// 	}}
//
// 	${props => {
// 		if (props.restaurantProfile) {
// 			return `
// 			color: #fff;
// 			background: ${props.theme.orangeMain};
// 			position: relative;
// 			padding: 8px 32px;
// 			letter-spacing: 1px;
// 			font-size: ${props.theme.fontNormal};
// 			`;
// 		}
// 	}}
// `;

