import React, { Fragment } from 'react';
import { FooterWrapper, FooterTop, FooterBottom,
    FooterLeft, FooterRight } from "../../../style/Footer";
import logoPropulsion from "../../../assets/images/Propulsion_Logo.png";

const LoginFooter = ( {props} ) => {

    return (
        <FooterWrapper>
            <FooterTop/>
            <FooterBottom>
                <FooterLeft>
                    <p>About</p>
                    <p>Help</p>
                    <p>Press</p>
                    <p>API</p>
                    <p>Jobs</p>
                    <p>Privacy</p>
                    <p>Terms</p>
                    <p>Language</p>
                </FooterLeft>
                <FooterRight>
                    <img src={logoPropulsion} alt="logo" className="logo"></img>
                    <p>&copy; 5aid by M.L.V.T.</p>
                </FooterRight>
            </FooterBottom>

        </FooterWrapper>
    )
}

export default LoginFooter