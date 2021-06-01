import styled from 'styled-components';
import { colors } from "../../../style/Theme";

export const GraphContainerMain = styled.div`
	width: 100%;
	padding: 0 15px;
	height: 80px;
	display: flex;
	align-items: center;
	background: #fff !important;
`;

export const LeftContainer = styled.div`
    display: flex;
    flex-direction: row;
    min-width: 32%;

	.leftColumn {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		min-width:  150px;
		
		div {
			margin-top: 10px;
			border-top: 2px solid ${colors.gray};
			width: 290px;
		}
	}
	.rightColumn {
		display: flex;
		flex-direction: column;
		width: 100%;
		align-items: flex-end;
		div {
			margin-top: 10px;
			border-top: 2px solid ${colors.gray};	
		}
	}
`;


export const PieChartWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
	min-height: 400px;
    padding-bottom: 5px;
    padding-top: 5px;

    .piechart {
        display: flex;
        flex-direction: column;
        width: 100%;
		min-width: 550px;
		justify-content: center;
		padding-left: 100px;
    }
`;