import styled from 'styled-components';
import { StandardWindow } from "./Container";
import { colors } from "./Theme";
import { FormGroup} from "./Inputs";



/////////////// GENERAL //////////////////////////////////

export const StandardWindowDataEdit = styled(StandardWindow)`
  width: 100%;
`

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  margin-top: 40px;
  margin-bottom: 10px;
  background-color: ${colors.gray};
`

/////////////// TOP //////////////////////////////////

export const SearchPart = styled.div``

export const TitleDiv = styled.div``

export const FormGroupSearch = styled.div`
  position: relative;
  margin-top: 20px;
  img{
    width: 25px;
    height: 25px;
    position: absolute;
    top: 15px;
    right: 20px;
    //pointer-events: none;
  }
`

export const SearchResults = styled.div``


export const ResultsText = styled.div`
  display: flex;
  height: 55px;
  align-items: center;
  margin-top: 20px;
`

export const ResultsGreen = styled.div`
  color: ${colors.green};
  padding-left: 20px;
`

/////////////// MIDDLE //////////////////////////////////

export const ResultsData = styled.div`
  width: 100%;
  gap: 30px;
  display: flex;
`

export const DataLeft = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  gap: 30px;
`

export const FormGroupRight = styled(FormGroup)`
    width: calc(100% - 70px);
`

export const DataRight = styled.div`
  gap: 30px;
  width: 50%;
  display: flex;
  align-items: center;
  position: relative;
  img{
    height: 25px;
    width: 25px;
    //margin-top: 25px;
    position: absolute;
    bottom: 17.5px;
    right: 20px;
    transform: rotate(180deg)
  }
`

/////////////// BOTTOM //////////////////////////////////

export const OverviewPart = styled.div`
  margin-top: 20px;
`
