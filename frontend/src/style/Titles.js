import styled from 'styled-components';
import { colors } from "./Theme";



/////////////////// 100% ////////////////////////////////

export const TitleContainer100 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 90px;
  padding-bottom: 7px;
  padding-top: 5px;
`

export const TitleLeft100 = styled.div`
  width: 25%;
  display: flex;
  position: relative;
  border-bottom: 2px solid ${colors.gray};
  img{
    position: absolute;
    top: 5px;
    right: -5px;
    width: 30px;
    height: 25px;
    outline: none;
    //pointer-events: none;
  };
`

export const TitleRight100 = styled.div`
  width: 75%;
  
`

/////////////////// 75% ////////////////////////////////

export const TitleContainer75 = styled(TitleContainer100)`
    gap: 30px;
`

export const TitleLeft75 = styled(TitleLeft100)`
    width: 35%;
`

export const TitleRight75 = styled(TitleRight100)`
    width: 70%;
`


/////////////////// 50% ////////////////////////////////

export const TitleContainer50 = styled(TitleContainer100)`
    gap: 30px;
`

export const TitleLeft50 = styled(TitleLeft100)`
    width: 50%;
`

export const TitleRight50 = styled(TitleRight100)`
    width: 50%;
`

/////////////////// 25% ////////////////////////////////

export const TitleContainer25 = styled(TitleContainer100)`
    gap: 0px;
`

export const TitleLeft25 = styled(TitleLeft100)`
    width: 100%;
`

export const TitleRight25 = styled(TitleRight100)`
    width: 0px;
`
