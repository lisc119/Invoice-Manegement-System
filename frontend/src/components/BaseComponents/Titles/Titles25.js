import React, { Fragment } from 'react';
import InfoIcon from '../../../assets/svgs/icon-info-grey.svg';
import { TitleContainer25, TitleLeft25, TitleRight25} from "../../../style/Titles";



const Titles25 = (props) => {
    return (
        <Fragment>
            <TitleContainer25>
                <TitleLeft25>
                    <h2>{props.title}</h2>
                    <img src={InfoIcon} alt={"Info Icon"} ></img>
                </TitleLeft25>
                <TitleRight25/>
            </TitleContainer25>
        </Fragment>
    )
};
export default Titles25
