import styled from 'styled-components';
import { StandardWindow } from '../../style/Container';


export const StandardWindowLogin = styled(StandardWindow)`
    /* width: 100%; */
    max-width: 300px;
    min-width: 400px;
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ContainerLogo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .logo {
        width: 250px;
        padding: auto;
    }

`;
export const ButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    border: 3px solid black;
`;
export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .loginButton {
        width: 90%;
        margin-left: 20px;
        /* margin-right: 20px; */
    }
`;