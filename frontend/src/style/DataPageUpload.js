import styled from 'styled-components';
import {YellowButton} from "./Button";
import { StandardWindow } from "./Container";
import { colors } from "./Theme";
import { Label2 } from "./Inputs";



export const StandardWindowDataUpload = styled(StandardWindow)`
  width: 100%;
`

///////////////// TOP ////////////////////////////////////////////////////////////////

export const TopGroup = styled.div`
  width: 100%;
  gap: 30px;
`

export const UploadPart = styled.div`
  display: flex;
  gap: 30px;
`

export const FormGroupUpload = styled.div`
  width: 50%;
  position: relative;
  margin-top: 20px;
  img{
    width: 30px;
    height: 25px;
    position: absolute;
    top: 15px;
    right: 20px;
    //pointer-events: none;
  }
`

export const IconUpload = styled(Label2)``

export const FormGroupComment = styled.div`
  width: 50%;
`

export const ResultsText = styled.div`
  display: flex;
  height: 55px;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  justify-content: space-between;
  gap: 90px;
`

export const Results = styled.div`
  width: 75%;
  display: flex;
`

export const ResultsGreen = styled.div`
  color: ${colors.green};
  padding-left: 20px;
`

export const ResultsRed = styled.div`
  color: ${colors.red};
  padding-left: 20px;
`

export const ButtonUpload = styled.div`
  width: 25%;
`

export const YellowButtonStyleUpload = styled(YellowButton)`
  width: 100%;
`

///////////////// MIDDLE ////////////////////////////////////////////////////////////////

export const MiddleGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
`

///////////////// BOTTOM ////////////////////////////////////////////////////////////////

export const BottomGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  margin-top: 20px;
`

export const SpaceLeft = styled.div`
  width: 50%;
`

export const SpaceRight = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  gap: 30px;
`

export const CheckPriceDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const CheckDiv = styled.div`
  padding-left: 20px;
`

export const PriceDiv = styled.div`
  padding-right: 20px;
  font-weight: bolder;
`

export const YellowButtonStyle = styled(YellowButton)`
  width: 100%;
`
