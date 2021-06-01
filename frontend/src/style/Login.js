import styled from 'styled-components';
import { colors } from "./Theme";
import { StandardWindow } from './Container';



export const LoginFragment = styled.div`
  width: 100%;
  height: calc(100vh - 110px);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin: 0 30px;
`

export const StandardWindowLaptop = styled.div`
    width: 54%;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      width: 100%;
      height: auto;
    };
`
export const StandardWindowPhone = styled.div`
    width: 15%;
    margin: 0 30px 0 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
      width: 70%;
      height: auto;
    };
    img.google{
      padding-bottom: 10px;
    }
    p{
      padding: 15px 0;
      color: ${colors.blueDark};
    }
`

export const StandardWindowLogin = styled(StandardWindow)`
    width: 25%;
    margin: 0;
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
        width: 80%;
        padding: auto;
    }

`

export const ButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 15px;
    margin-bottom: 10px;
    gap: 30px;
    button{
      height: 50px;
      width: 120px;
      background-color: ${colors.white};
      border: none;
      border-radius: 15px;
      color: ${colors.blueDark};
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      transition: linear 0.5s;
      :hover {
    	background-color: ${colors.yellowLight};
	    transition: linear 0.5s;
	 	};
      :active {
    	background-color: solid 2px ${colors.yellowLight};
	    transition: linear 0.5s;
	 	}
    };
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .loginButton {
        width: 100%;
    }
`