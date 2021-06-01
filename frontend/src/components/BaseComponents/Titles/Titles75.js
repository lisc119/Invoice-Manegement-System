import React, { Fragment } from 'react';
import InfoIcon from '../../../assets/svgs/icon-info-grey.svg';
import { TitleContainer75, TitleLeft75, TitleRight75} from "../../../style/Titles";



const Titles75 = (props) => {
    return (
        <Fragment>
            <TitleContainer75>
                <TitleLeft75>
                    <h2>{props.title}</h2>
                    <img src={InfoIcon} alt={"Info Icon"} ></img>
                </TitleLeft75>
                <TitleRight75/>
            </TitleContainer75>
        </Fragment>
    )
};
export default Titles75
