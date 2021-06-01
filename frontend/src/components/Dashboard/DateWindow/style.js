import { colors } from "../../../style/Theme";
import styled from 'styled-components';


export const TitleDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    /* border-top: 2px solid ${colors.blue}; */
    padding-top: 5px;

    .leftColumn {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 160px;
    }
    .rightColumn {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: flex-end;
    }
`;