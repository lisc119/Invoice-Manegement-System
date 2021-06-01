import React, { Fragment, useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";

import getFilteredAction from "../../store/actions/getFilteredAction";
import getFilteredInvoiceAction from "../../store/actions/getFilteredInvoicesAction";

import ResultsTable from "./resultsTable";
import InvTable from "./invoicesTable";

import { LeftContainer } from "./style";
import { groupStyles, groupBadgeStyles } from "./style";

import AnalysisPieChart from "./pieAnalysis";
import AnalysisInvoicePieChart from "./pieAnalysisInvoices";

import { FormGroup, Label2, Input2 } from "../../style/Inputs";

import {
  MainBodyContainer,
  StandardWindow,
} from "../../style/Container";
import Titles25 from "../BaseComponents/Titles/Titles25";
import Titles75 from "../BaseComponents/Titles/Titles75";

const FiltersAnalysis = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [filteredInvoices, setFilteredInvoices] = useState([]);
  const [shop, setShop] = useState("");
  const [article, setArticle] = useState("");

  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);

  const [startDate, setStartDate] = useState(new Date());
  const InputStartDate = ({ value, onClick }) => (
    <Fragment>
      <FormGroup className="dates">
        <Label2 for="startDate">Start Date</Label2>
        <Input2
          type="text"
          onClick={onClick}
          placeholder={value}
          name="startDate"
          id="startDate"
        />
      </FormGroup>
    </Fragment>
  );

  const [endDate, setEndDate] = useState(new Date());
  const InputEndDate = ({ value, onClick }) => (
    <Fragment>
      <FormGroup className="dates">
        <Label2 for="endDate">End Date</Label2>
        <Input2
          type="text"
          onClick={onClick}
          placeholder={value}
          name="endDate"
          id="endDate"
        />
      </FormGroup>
    </Fragment>
  );

  useEffect(() => {
    const getData = async () => {
      const data = await dispatch(
        getFilteredAction(
          startDate.toISOString().slice(0, 10),
          endDate.toISOString().slice(0, 10),
          "1/",
          token,
          article
        )
      );
      setFilteredData(data);
    };
    getData();
  }, [startDate, endDate, dispatch, article]);

  useEffect(() => {
    const getData = async () => {
      const data = await dispatch(
        getFilteredInvoiceAction(
          startDate.toISOString().slice(0, 10),
          endDate.toISOString().slice(0, 10),
          token,
          shop
        )
      );
      setFilteredInvoices(data);
    };
    getData();
  }, [startDate, endDate, dispatch, shop]);

  return (
    <Fragment>
      <MainBodyContainer LeftColumn>
        <StandardWindow>
          <LeftContainer>
            <Titles25 title={"Filters"} />
            <div className="leftColumn">
              <form style={{ width: "100%" }}>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  customInput={<InputStartDate />}
                />
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  customInput={<InputEndDate />}
                />
                <FormGroup>
                  <Label2 for="shop">Shop / Supplier</Label2>
                  <Input2
                    type="text"
                    name="shop"
                    id="shop"
                    onChange={(event) => setShop(event.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label2 for="article">Article</Label2>
                  <Input2
                    type="text"
                    name="article"
                    id="article"
                    onChange={(event) => setArticle(event.target.value)}
                  />
                </FormGroup>
              </form>
            </div>
          </LeftContainer>
        </StandardWindow>

        <StandardWindow>
          <Titles25 title={"Summary"} />
          <LeftContainer>
            <div className="leftColumnSumm">
              {filteredData.length >= 1 ? (
                <Fragment>
                  <div className="leftColumnAnalysis">
                    {filteredData.map((entry) => (
                      <h4>{entry.item.slice(0, 15)}</h4>
                    ))}
                    <div>
                      <h2>Total</h2>
                    </div>
                  </div>
                </Fragment>
              ) : null}

              {filteredData.length >= 1 ? (
                <Fragment>
                  <div className="rightColumnAnalysis">
                    {filteredData.map((entry) => (
                      <h4>{entry.total_price}</h4>
                    ))}
                    <h2>
                      {filteredData.reduce((sum, current) => {
                        return sum + current.total_price;
                      }, 0)}
                    </h2>
                  </div>
                </Fragment>
              ) : null}
            </div>
          </LeftContainer>
        </StandardWindow>
      </MainBodyContainer>

      <MainBodyContainer RightColumn>
        <MainBodyContainer LeftColumn>
          <StandardWindow>
            <Titles75 title={"Invoices"} />
            <InvTable props={filteredInvoices} />
          </StandardWindow>
        </MainBodyContainer>

        <MainBodyContainer LeftColumn>
          <StandardWindow>
            <Titles75 title={"Articles"} />
            <ResultsTable props={filteredData} />
          </StandardWindow>
        </MainBodyContainer>

        <MainBodyContainer LeftColumn>
          <StandardWindow>
            <Titles75 title={"Invoices Summary"} />
            {filteredInvoices.length >= 1 ? (
              <AnalysisInvoicePieChart props={filteredInvoices} />
            ) : (
              <p>Please apply filters</p>
            )}
          </StandardWindow>
        </MainBodyContainer>

        <MainBodyContainer LeftColumn>
          <StandardWindow>
            <Titles75 title={"Articles Summary"} />
            {filteredData.length >= 1 ? (
              <AnalysisPieChart props={filteredData} />
            ) : (
              <p>Please apply filters</p>
            )}
          </StandardWindow>
        </MainBodyContainer>
      </MainBodyContainer>
    </Fragment>
  );
};

export default FiltersAnalysis;
