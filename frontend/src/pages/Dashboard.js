import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import getAllAction from "../store/actions/getAll";
import Spinner from "../components/BaseComponents/Spinner";

import DashboardPieChart from "../components/Graphs/DashboardPie";
import DashboardBarsChart from "../components/Graphs/DashboardBars/index";
import Navbar from "../components/BaseComponents/Navbar";
import InvoiceTable from "../components/Dashboard/InvoicesWindow";
import RevenueDashboard from "../components/Dashboard/RevenueWindow";
import KPITable from "../components/Dashboard/KPI";
import Title75 from "../components/BaseComponents/Titles/Titles75";
import Title25 from "../components/BaseComponents/Titles/Titles25";

import {
  StandardWindow,
  MainBodyContainer,
  ContainerTop,
  NavyBackground,
} from "../style/Container";
import DateDashboard from "../components/Dashboard/DateWindow";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [AllInfo, setAllInfo] = useState([]);

  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    const getData = async () => {
      const data = await dispatch(getAllAction(token));
      setAllInfo(data);
    };
    getData();
  }, [setAllInfo, dispatch, token]);

  return (
    <Fragment>
      <Navbar props={"dashboard"} />
      <NavyBackground>
        <ContainerTop />
      </NavyBackground>
      <MainBodyContainer Main>
        <MainBodyContainer LeftColumn>
          <StandardWindow>
            <Title25 title={"Date range"} />
            {AllInfo.length !== 0 ? (
              <DateDashboard props={AllInfo} />
            ) : (
              <Spinner />
            )}
          </StandardWindow>

          <StandardWindow>
            <Title25 title={"Revenues"} />
            {AllInfo.length !== 0 ? (
              <RevenueDashboard props={AllInfo} />
            ) : (
              <Spinner />
            )}
          </StandardWindow>

          <StandardWindow>
            <Title25 title={"Invoices"} />
            {AllInfo.length !== 0 ? (
              <InvoiceTable props={AllInfo} />
            ) : (
              <Spinner />
            )}
          </StandardWindow>

          {/* <StandardWindow>
            {AllInfo.length !== 0 ? <KPITable props={AllInfo} /> : <Spinner />}
          </StandardWindow> */}
        </MainBodyContainer>
        <MainBodyContainer RightColumn>
          <StandardWindow>
            <Title75 title={"Expenses"} />
            {AllInfo.length !== 0 ? (
              <DashboardPieChart props={AllInfo} />
            ) : (
              <Spinner />
            )}
          </StandardWindow>

          <StandardWindow>
            {AllInfo.length !== 0 ? (
              <DashboardBarsChart allInfo={AllInfo} withRevenue={false} />
            ) : (
              <Spinner />
            )}
          </StandardWindow>
          <StandardWindow>
            {AllInfo.length !== 0 ? (
              <DashboardBarsChart allInfo={AllInfo} withRevenue={true} />
            ) : (
              <Spinner />
            )}
          </StandardWindow>
        </MainBodyContainer>
      </MainBodyContainer>
    </Fragment>
  );
};

export default Dashboard;
