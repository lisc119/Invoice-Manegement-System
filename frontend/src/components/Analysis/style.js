import { colors, fontSizes } from "../../style/Theme";
import styled, { css } from 'styled-components';

export const GraphContainerMain = styled.div`
	width: 100%;
	padding: 0 15px;
	height: 80px;
	display: flex;
	align-items: center;
	background: #fff !important;
	/* background-color: red; */
`;

export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 270px;
    /* max-width: 310px; */
    /* border: 3px solid black; */

	.leftColumn {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
        justify-content: center;
		min-width:  170px;
        max-width: 240px; 
	}
	.rightColumn {
		display: flex;
		flex-direction: column;
		width: 100%;
		align-items: flex-end;
		div {
			margin-top: 10px;
			border-top: 2px solid ${colors.blue};
		}
	}
    .leftColumnSumm {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
        justify-content: center;
        width: 100%;
		min-width:  170px;
        max-width: 280px; 
	}
    .leftColumnAnalysis {
        width: 100%;
    }
    .rightColumnAnalysis {
        text-align: right;
    }
`;


export const PieChartWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
	min-height: 400px;
    border-top: 2px solid ${colors.blue};
    padding-bottom: 5px;
    padding-top: 5px;
    border-bottom: 2px solid ${colors.blue};

    .piechart {
        display: flex;
        flex-direction: column;
        width: 100%;
		min-width: 550px;
		justify-content: center;
		padding-left: 100px;
    }
`;

export const groupStyles = styled.div`
    display: 'flex';
    align-items: 'center';
    justify-content: 'space-between';
`;



export const groupBadgeStyles = styled.span`
    /* height: 55px;
    width: 100%;
    border-radius: 18px;
    border: solid 2px ${colors.gray};
    box-sizing: border-box;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    color: ${colors.blueDark};
    padding-left: 20px;
    transition: linear 0.5s;
    :focus{
        outline: none;
        border: solid 2px ${colors.blue};
        transition: linear 0.5s;
        + label{
            color: ${colors.blue};
            outline: none;
        }
    } */
`;


export const ResultsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-items: center;

    /* .ResultsInvoices {
        border: 3px solid black;
        min-width: 500px;
        width: 50%;
        background-color: pink;
    } */

    .ResultsArticles {
        border: 3px solid black;
        width: 40%;
    }
`;