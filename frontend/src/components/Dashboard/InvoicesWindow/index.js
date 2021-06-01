import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getLatestAction from "../../../store/actions/getLatestAction";

import { InvoiceTableCSS, TitleDiv } from "./style";
import getDate from "../../../helper/date_helper";

const InvoiceTable = ({ props }) => {
  const [latest, setlatest] = useState([]);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    const getData = async () => {
      const data = await dispatch(getLatestAction(token));
      setlatest(data);
    };
    getData();
  }, [setlatest, dispatch]);

    return (
        <Fragment>
            <TitleDiv>
                <div className="leftColumn">
                    <h3>Year no.</h3>
                    <h3>Year total</h3>
                    <h3>Month no.</h3>	
                    <h3>Month total</h3>	
                </div>
                <div className="rightColumn">
                    <h3>{props.invoices.filter(inv => {return inv.date >= getDate('12')}).length}</h3>
                    <h3>{props.invoices.filter(inv => {return inv.date >= getDate('12')}).reduce((sum, current) => { return sum + current.total_amount}, 0)}</h3>
                    <h3>{props.invoices.filter(inv => {return inv.date >= getDate('1')}).length}</h3>
                    <h3>{props.invoices.filter(inv => {return inv.date >= getDate('1')}).reduce((sum, current) => { return sum + current.total_amount}, 0)}</h3>
                </div>
            </TitleDiv>
            <InvoiceTableCSS style={{marginTop:"10px"}}>
                <tbody style={{width:"100%"}}>
                    <tr style={{borderBottom:"1px solid black"}}>
                        <th style={{width:"20%", fontSize:"20px"}}>Date</th>
                        <th style={{width:"65%", fontSize:"20px", paddingLeft:"20px", textAlign:"left"}}>Supplier</th>
                        <th style={{width:"20%", fontSize:"20px"}}>Total</th>
                    </tr>
                    {latest.length > 0 
                    ? latest.map((inv) => {
                        return (
                            <tr key={inv.id}>
                                <td style={{textAlign:"left"}}>{inv.date.slice(2)}</td>
                                <td style={{textAlign:"left", paddingLeft:"20px"}}>{inv.shop}</td>
                                <td style={{textAlign:"right"}}>{inv.total_amount}</td>
                            </tr>)
                            })
                    : <p>no new Invoices</p>}   
                </tbody>
            </InvoiceTableCSS>
        </Fragment>
    )
};

export default InvoiceTable;
