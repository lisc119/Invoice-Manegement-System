import React, { Fragment } from 'react';
import InfoIcon from '../../../assets/svgs/icon-info-grey.svg';
import { TitleContainer50, TitleLeft50, TitleRight50} from "../../../style/Titles";



const Titles50 = (props) => {
    return (
        <Fragment>
            <TitleContainer50>
                <TitleLeft50>
                    <h2>{props.title}</h2>
                    <img src={InfoIcon} alt={"Info Icon"} ></img>
                </TitleLeft50>
                <TitleRight50/>
            </TitleContainer50>
        </Fragment>
    )
};
export default Titles50