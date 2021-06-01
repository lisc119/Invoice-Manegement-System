import styled from 'styled-components';


export const TitleDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
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