import { colors } from "../../../style/Theme";
import styled from 'styled-components';

export const KPITableCSS = styled.table`

    table, th, td {
        
    }
`;

export const TitleDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    border-top: 2px solid ${colors.blue};
    padding-bottom: 5px;
    padding-top: 5px;
    border-bottom: 2px solid ${colors.blue};

    .leftColumn {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 180px;
    }
    .rightColumn {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: flex-end;
    }
`;