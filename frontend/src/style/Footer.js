import styled from 'styled-components';
import { colors } from "./Theme";



export const FooterWrapper = styled.nav`
    position: absolute;
    bottom: 0;
	width: 100%;
	/* padding: 0 15px; */
	height: 135px;
	background: ${colors.blueDark} !important;
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const FooterTop = styled.div`
  width: 100%;
  height: 25px;
  background-color: ${colors.blueLightBackground};
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`

export const FooterBottom = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  align-items: center;
`

export const FooterLeft = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
  color: ${colors.white};
  margin-left: 30px;
`

export const FooterRight = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-end;
  color: ${colors.white};
  margin-right: 30px;
  align-items: center;
  justify-content: space-around;
  img {
    max-width: 60%;
  }
`
