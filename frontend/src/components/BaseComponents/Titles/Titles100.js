import React, { Fragment } from 'react';
import InfoIcon from '../../../assets/svgs/icon-info-grey.svg';
import { TitleContainer100, TitleLeft100, TitleRight100} from "../../../style/Titles";



const Titles100 = (props) => {
    return (
        <Fragment>
            <TitleContainer100>
                <TitleLeft100>
                    <h2>{props.title}</h2>
                    <img src={InfoIcon} alt={"Info Icon"} ></img>
                </TitleLeft100>
                <TitleRight100/>
            </TitleContainer100>
        </Fragment>
    )
};
export default Titles100
