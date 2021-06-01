import styled from 'styled-components';
import {YellowButton} from "./Button";
// import {Input2} from "./Inputs";
// import { colors } from './Theme';
import { StandardWindow } from './Container';



/////////////// GENERAL //////////////////////////////////

export const StandardWindowDataEdit = styled(StandardWindow)`
  width: 100%;
`

/////////////// TOP //////////////////////////////////

export const TopGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
`

export const TopLeft = styled.div`
  width: 50%;
  //margin: 0 15px 0 0;
  display: flex;
  justify-content: space-between;
  gap: 30px;
`

export const TopRight = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  width: 50%;
`

/////////////// MIDDLE //////////////////////////////////

export const MiddleGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
`

/////////////// BOTTOM //////////////////////////////////

export const BottomGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`

export const SpaceLeft = styled.div`
  min-width: 50%;
`

export const SpaceRight = styled.div`
  min-width: 50%;
  display: flex;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
`

export const CheckPriceDiv = styled.div`
  min-width: 57%;
  display: flex;
  flex-direction: row;

`

export const CheckDiv = styled.div`
  min-width: 60%;
  display: flex;
  flex-direction: row;
  padding-left: 20px;
  align-items: center;
`

export const PriceDiv = styled.div`
  padding-right: 20px;
  font-weight: bold;
`

export const YellowButtonStyle = styled(YellowButton)`
  width: 100%;

`