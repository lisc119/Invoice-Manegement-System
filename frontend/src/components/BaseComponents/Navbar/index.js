import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  timeAction,
  subWindowAction,
  logoutAction,
} from "../../../store/actions/actionTypes";
import getDate from "../../../helper/date_helper";
import DateModal from "./modalDate";

import {
  NavbarWrapper,
  NavbarTopWrapper,
  NavbarLeft,
  NavbarMiddle,
  NavbarRight,
  NavbarBottom,
} from "./style";
import logo from "../../../assets/images/logo-5aid-white.png";
import IconDashboard from "../../../assets/svgs/icon-dashboard-white.svg";
import IconData from "../../../assets/svgs/icon-data-white.svg";
import IconAnalysis from "../../../assets/svgs/icon-analysis-white.svg";
import IconSettings from "../../../assets/svgs/icon-settings-white.svg";
import IconSearch from "../../../assets/svgs/icon-search-white.svg";
import IconBell from "../../../assets/svgs/icon-bell-white.svg";
import IconProfile from "../../../assets/svgs/icon-user-white.svg";
import logout from "../../../assets/images/logout.png";

const Navbar = ({ props }) => {
  const [active, setActive] = useState(props);
  const [activeSub, setActiveSub] = useState("12");
  const [activeModal, setActiveModal] = useState(false);
  const [activeSubWindow, setActiveSubWindow] = useState(
    useSelector((state) => state.subWindow.window)
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(subWindowAction(activeSubWindow));
  }, [activeSubWindow, activeSub, dispatch]);

  useEffect(() => {
    dispatch(timeAction(getDate(activeSub), getDate("0"), activeSub));
  }, [activeSub, dispatch]);

  const handleLogout = () => {
    dispatch(logoutAction);
  };

  return (
    <Fragment>
      <NavbarWrapper>
        <NavbarLeft>
          <Link onClick={() => setActive("dashboard")} to="/dashboard">
            <img className="logo" src={logo} alt="logo" />
          </Link>
        </NavbarLeft>

        <NavbarMiddle>
          <NavbarTopWrapper>
            <Link
              className={
                active === "dashboard"
                  ? "dashboardLink active"
                  : "dashboardLink"
              }
              onClick={() => setActive("dashboard")}
              to="/dashboard"
            >
              <img className="" src={IconDashboard} alt="Icon Dashboard" />
              Dashboard
            </Link>
            <Link
              className={active === "data" ? "dataLink active" : "dataLink"}
              onClick={() => {
                setActive("data");
                setActiveSubWindow("new");
              }}
              to="/data"
            >
              <img className="" src={IconData} alt="Icon Data" />
              Data
            </Link>
            <Link
              className={
                active === "analysis" ? "analysisLink active" : "analysisLink"
              }
              onClick={() => {
                setActiveSubWindow("filter");
                setActive("analysis");
              }}
              to="/analysis"
            >
              <img className="" src={IconAnalysis} alt="Icon Analysis" />
              Analysis
            </Link>
            <Link
              className={
                active === "settings" ? "settingsLink active" : "settingsLink"
              }
              onClick={() => {
                setActiveSubWindow("userInfo");
                setActive("settings");
              }}
              to="/settings"
            >
              <img className="" src={IconSettings} alt="Icon Settings" />
              Settings
            </Link>
          </NavbarTopWrapper>

          {active === "dashboard" ? (
            <NavbarBottom>
              <Link
                className={activeSub === "12" ? "timeLink active" : "timeLink"}
                onClick={() => setActiveSub("12")}
              >
                Year
              </Link>
              <Link
                className={activeSub === "6" ? "timeLink active" : "timeLink"}
                onClick={() => setActiveSub("6")}
              >
                6 Months
              </Link>
              <Link
                className={activeSub === "3" ? "timeLink active" : "timeLink"}
                onClick={() => setActiveSub("3")}
              >
                3 Months
              </Link>
              <Link
                className={activeSub === "2" ? "timeLink active" : "timeLink"}
                onClick={() => setActiveSub("2")}
              >
                Last Month
              </Link>
              <Link
                className={activeSub === "1" ? "timeLink active" : "timeLink"}
                onClick={() => setActiveSub("1")}
              >
                This Month
              </Link>
              <Link
                className={
                  activeSubWindow === "from" ? "timeLink active" : "timeLink"
                }
                onClick={() => {
                  setActiveModal(!activeModal);
                  setActiveSubWindow("from");
                  setActiveSub("from");
                }}
              >
                From - To
              </Link>
            </NavbarBottom>
          ) : null}

          {activeModal ? <DateModal /> : null}

          {active === "data" ? (
            <NavbarBottom>
              <Link
                className={
                  activeSubWindow === "new" ? "timeLink active" : "timeLink"
                }
                onClick={() => setActiveSubWindow("new")}
              >
                New Invoice
              </Link>
              <Link
                className={
                  activeSubWindow === "edit" ? "timeLink active" : "timeLink"
                }
                onClick={() => setActiveSubWindow("edit")}
              >
                Edit
              </Link>
              <Link
                className={
                  activeSubWindow === "upload" ? "timeLink active" : "timeLink"
                }
                onClick={() => setActiveSubWindow("upload")}
              >
                Upload
              </Link>
            </NavbarBottom>
          ) : null}

          {active === "analysis" ? (
            <NavbarBottom>
              <Link
                className={
                  activeSubWindow === "filter" ? "timeLink active" : "timeLink"
                }
                onClick={() => setActiveSubWindow("filter")}
              >
                Filters
              </Link>
            </NavbarBottom>
          ) : null}

          {active === "settings" ? (
            <NavbarBottom>
              <Link
                className={
                  activeSubWindow === "resInfo" ? "timeLink active" : "timeLink"
                }
                onClick={() => setActiveSubWindow("resInfo")}
              >
                Restaurant Profile
              </Link>
              <Link
                className={
                  activeSubWindow === "tags" ? "timeLink active" : "timeLink"
                }
                onClick={() => setActiveSubWindow("tags")}
              >
                Tags
              </Link>
            </NavbarBottom>
          ) : null}
        </NavbarMiddle>

        <NavbarRight>
          {/* <Link to='#'>
                        <img className="Icon" src={IconSearch} alt="" />
                    </Link>
                    <Link to='#'>
                        <img className="Icon" src={IconBell} alt="" />
                    </Link>
                    <Link to='#'>
                        <img className="Icon" src={IconProfile} alt="" />
                    </Link> */}
          <Link to="#" onClick={handleLogout}>
            <img className="Icon" src={logout} alt="" />
          </Link>
        </NavbarRight>
      </NavbarWrapper>
    </Fragment>
  );
};

export default Navbar;
