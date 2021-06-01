import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import getDates from "../../../helper/dates_helper";

import { TitleDiv } from "./style";
import getDate from "../../../helper/date_helper";
import Titles25 from "../../BaseComponents/Titles/Titles25";

const DateDashboard = ({ props }) => {
  let activeSub = useSelector((state) => state.filter.activeSub);
  // console.log("activeSub", activeSub);

  let [startDate, endDate] = getDates(
    activeSub
  );

  return (
    <Fragment>
      <TitleDiv>
        <div className="leftColumn">
          <h3>Start Date</h3>
          <h3>End Date</h3>
        </div>
        <div className="rightColumn">
          <h3>{startDate}</h3>
          <h3>{endDate}</h3>
        </div>
      </TitleDiv>
    </Fragment>
  );
};

export default DateDashboard;
