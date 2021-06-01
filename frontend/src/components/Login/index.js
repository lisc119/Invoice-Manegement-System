import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { LoginFragment, StandardWindowLaptop, StandardWindowPhone, StandardWindowLogin,
    ContainerLogo, ButtonsContainer, InputContainer } from '../../style/Login';
import { YellowButton } from '../../style/Button';
import { Label2, Input2, FormGroup } from '../../style/Inputs';
import logoBlue from '../../assets/images/logo-5aid-blue-text.png';
import BtnGoogle from '../../assets/images/btn-google.png'
import BtnApple from '../../assets/images/btn-apple.png'
import PicLaptop from '../../assets/images/mockup-laptop.png'
import PicMobile from '../../assets/images/mockup-mobile.png'
import { authAction } from "../../store/actions/authAction";
import baseUrl from '../../helper/url_helper';

const LoginLogic = () => {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleEmail = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
  };

  const handlePassword = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = `${baseUrl}auth/token/`;
    const config = {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({ email, password }),
    };

    fetch(url, config)
      .then((response) => response.json())
      .then((data) => {
        // console.log("Redux Hooks data", data);
        dispatch(authAction(data.access));
        localStorage.setItem("token", data.access);
        history.push("/dashboard");
        // dispatch(userInfoAction)
      });
  };

	return (
		<LoginFragment>
            <StandardWindowLaptop>
                <img src={PicLaptop} alt="Laptop"></img>
            </StandardWindowLaptop>
            <StandardWindowPhone>
                <img src={PicMobile} alt="Mobilephone"></img>
                <p>Install App</p>
                <img src={BtnGoogle} className={"google"} alt="GooglePlay"></img>
                <img src={BtnApple} alt="AppStore"></img>
            </StandardWindowPhone>
			<StandardWindowLogin>
                <ContainerLogo>				
                    <img src={logoBlue} alt="logo" className="logo"></img>
                </ContainerLogo>
                <ButtonsContainer>
                    <button>Login</button>
                    <button>SignUp</button>
                </ButtonsContainer>
                <InputContainer>
                    <FormGroup>
                        <Label2 to="email">Email Address</Label2>
                        <Input2 type="text" onChange={handleEmail} value={email} name="email" id="email"/>
                    </FormGroup>
                    <FormGroup>
                        <Label2 to="password">Password</Label2>
                        <Input2 type="password" onChange={handlePassword} value={password} name="password" id="password"/>
                    </FormGroup>
                    <FormGroup style={{width:"100%"}}>
                        <YellowButton className="loginButton" onClick={handleSubmit}>
                            Login
                        </YellowButton>
                    </FormGroup>
                </InputContainer>

			</StandardWindowLogin>
		</LoginFragment>
	);
};

export default LoginLogic;