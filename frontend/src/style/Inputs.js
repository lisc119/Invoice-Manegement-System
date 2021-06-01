import { colors } from "../style/Theme";
import styled from 'styled-components';

export const EmailAddress = styled.input`
    margin: 20px;
    height: 55px;
    width: 100%;
    border-radius: 18px;
    border: solid 2px ${colors.gray};
    box-sizing: border-box;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    color: ${colors.blueDark};
    padding-left: 20px;
`;


export const FormGroup = styled.div`
  width: 100%;
  position:relative;
  display: inline-block;
  margin: 20px;
  
  img{
    width: 30px;
    height: 25px;
    position: absolute;
    top: 15px;
    right: 15px;
`;


export const Input2 = styled.input`
  height: 55px;
  width: 100%;
  border-radius: 18px;
  border: solid 2px ${colors.gray};
  box-sizing: border-box;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  color: ${colors.blueDark};
  padding-left: 20px;
  transition: linear 0.5s;
  :focus{
      outline: none;
      border: solid 2px ${colors.blue};
      transition: linear 0.5s;
      + label{
        color: ${colors.blue};
        outline: none;
      }
  }
`;

export const Label2 = styled.label`
    background: ${colors.white};
    position: absolute;
    left: 18px;
    top: -10px;
    padding: 0 5px;
    color: ${colors.gray};
    font-size: 14px;
`;


export const Password = styled.input`
    height: 55px;
    border-radius: 18px;
    border: solid 2px ${colors.gray};
    box-sizing: border-box;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    color: ${colors.blueDark};
    //padding-left: 20px;
`;
