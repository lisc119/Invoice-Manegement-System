import React, { PureComponent, useState, useEffect, Fragment } from "react";
import { act } from "react-dom/test-utils";
import { useSelector } from "react-redux";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import getDates from "../../../helper/dates_helper";
import { BarChartWrapper, LeftContainer } from "./style";
import { colors } from "../../../style/Theme";
import { Table } from "./table";
import Title75 from '../../BaseComponents/Titles/Titles75';

const test = [
  {
    name: "Sep",
    others_ly: 4000,
    wages_ly: 2400,
    profit_ly: 2400,
    others_ty: 4000,
    wages_ty: 2400,
    profit_ty: 2400,
  },
  {
    name: "Oct",
    others_ly: 4000,
    wages_ly: 2400,
    profit_ly: 2400,
    others_ty: 4000,
    wages_ty: 2400,
    profit_ty: 2400,
  },
  {
    name: "Nov",
    others_ly: 4000,
    wages_ly: 2400,
    profit_ly: 2400,
    others_ty: 4000,
    wages_ty: 2400,
    profit_ty: 2400,
  },
];

let objectToSortedArray = (obj) => {
  let arrayData = [];
  for (let dataKey of Object.keys(obj).sort()) {
    arrayData.push({ name: dataKey, ...obj[dataKey] });
    //{name: tagname, others_ly: 4000, wages_ly: 2400, profit_ly: 2400, others_ty: 4000, wages_ty: 2400, profit_ty: 2400}
  }
  return arrayData;
}

let removeYearFromObjectKeys = (array) => {
  return array.map((obj) => {
    let newObj = {};
    for (let [key, value] of Object.entries(obj)) {
      let newKey = key;
      if (key != 'name') {
        newKey = key.substring(0, key.length - 4);
      }
      newObj[newKey] = value;
    }
    return newObj;
  });
}

let getGroupedData = (invoices, from, until, groupByYear, colorByTagname) => {
  var groupedData = {};

  let filteredInvoices = invoices.filter((invoice) => {
    return invoice.date >= from && invoice.date <= until;
  });
  // console.log("filteredInvoices: ", filteredInvoices);
  for (let invoice of filteredInvoices) {
    let dateKey;
    let year = invoice.date.substring(0, 4);
    if (groupByYear) {
      dateKey = year;
    } else {
      dateKey = invoice.date.substring(5, 7);
    }

    if (groupedData[dateKey] == undefined) {
      groupedData[dateKey] = {};
    }

    for (let article of invoice.articles) {
      let tagName = article.tag.title + year;

      colorByTagname[tagName] = article.tag.color;

      if (groupedData[dateKey][tagName] == undefined) {
        groupedData[dateKey][tagName] = article.total_price;
      } else {
        groupedData[dateKey][tagName] += article.total_price;
      }
    }
    // for (let article of invoice.articles) {
    //   let tagName = article.tag.title + year;
    //   if (groupedData[dateKey][tagName] == undefined) {
    //     groupedData[dateKey][tagName] = {};
    //   }
    //   if (groupedData[dateKey][tagName]['sum'] == undefined) {
    //     groupedData[dateKey][tagName]['sum'] = article.total_price;
    //   } else {
    //     groupedData[dateKey][tagName]['sum'] += article.total_price;
    //   }
    //   if (groupedData[dateKey][tagName]['color'] == undefined) {
    //     groupedData[dateKey][tagName]['color'] = article.tag.color;
    //   } else {
    //     groupedData[dateKey][tagName]['color'] += article.tag.color;
    //   }
    // }
  }
  // console.log("groupedData: ", groupedData);
  return groupedData;
};

let addRevenueTag = (
  groupedData,
  revenues,
  from,
  until,
  groupByYear,
  colorByTagname
) => {
  let filteredRevenues = revenues.filter((revenue) => {
    return revenue.date >= from && revenue.date < until;
  });
  // console.log("filteredRevenues: ", filteredRevenues);

  for (let revenue of filteredRevenues) {
    let dateKey;
    let year = revenue.date.substring(0, 4);
    if (groupByYear) {
      dateKey = year;
    } else {
      dateKey = revenue.date.substring(5, 7);
    }
    // console.log(`groupedData[${dateKey}]: `, groupedData[dateKey]);
    // console.log("sum the numbers of: ", Object.values(groupedData[dateKey]))
    let expenses = Object.values(groupedData[dateKey]).reduce((a, b) => a + b);
    // console.log('expenses: ', expenses);
    let rev = revenue.revenue == NaN ? 0 : revenue.revenue;

    let profitName = "profit" + year;
    // let revenueName = "Revenue" + year;
    colorByTagname[profitName] = `${colors.gray}`;
    if (groupedData[dateKey][profitName] == undefined) {
      groupedData[dateKey][profitName] = Math.abs(rev - expenses);
      // groupedData[dateKey][revenueName] = revenue.revenue;
    } else {
      groupedData[dateKey][profitName] += rev;
      // groupedData[dateKey][revenueName] += revenue.revenue;
    }
  }
  return groupedData;
};

// {
//  '11': {
//    food: 12312
//  }
//}

let getBarData = (groupedData, stackId) => {
  let uniqueNames = new Set();
  for (let dataKey in groupedData) {
    for (let tagname in groupedData[dataKey]) {
      uniqueNames.add(tagname);
    }
  }

  let sortedNames = Array.from(uniqueNames).sort();
  // console.log("sortedNames: ", sortedNames);

  let barData = [];
  var i = 0;
  for (let element of sortedNames) {
    barData.push({
      name: element,
      stack: stackId,
    });
    i++;
  }
  // console.log("barData: ", barData);
  return barData;
};

// static jsfiddleUrl = 'https://jsfiddle.net/alidingling/9hjfkp73/';
const DashboardBarsChart = (props) => {
  let { allInfo, withRevenue } = props;
  // const DashboardBarsChart = ({ allInfo }) => {
  // console.log("allInfo: ", allInfo);

  /*
  let currentTimeFrameStart = useSelector(
    (state) => state.filter.timeFrameStart
  ); // '12'
  let currentTimeFrameEnd = useSelector((state) => state.filter.timeFrameEnd); //
    console.log("start", currentTimeFrameStart)
  console.log("end", currentTimeFrameEnd)
  */

  let activeSub = useSelector((state) => state.filter.activeSub);
  // console.log("activeSub", activeSub);

  let groupByYear = activeSub == "12" || activeSub == "2" || activeSub == "1";

  let [startDate, endDate, startDateLastYear, endDateLastYear] = getDates(
    activeSub
  );

  // console.log("getDates() result ####################");
  // console.log(startDate);
  // console.log(endDate);
  // console.log(startDateLastYear);
  // console.log(endDateLastYear);

  const [data, setData] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const [bar, setBar] = useState([]);
  const [total, setTotal] = useState({});
  const [colorByTagname, setColorByTagname] = useState({});

  useEffect(() => {
    let colorByTagname = {};
    let currentData = getGroupedData(
      allInfo.invoices,
      startDate,
      endDate,
      groupByYear,
      colorByTagname
    );
    let lastData = getGroupedData(
      allInfo.invoices,
      startDateLastYear,
      endDateLastYear,
      groupByYear,
      colorByTagname
    );

    // console.log("currentData: ", currentData);
    // console.log("lastData: ", lastData);

    if (withRevenue) {
      currentData = addRevenueTag(
        currentData,
        allInfo.revenues,
        startDate,
        endDate,
        groupByYear,
        colorByTagname
      );
      lastData = addRevenueTag(
        lastData,
        allInfo.revenues,
        startDateLastYear,
        endDateLastYear,
        groupByYear,
        colorByTagname
      );
    }

    // create the bar data
    let bar = [];
    bar = bar.concat(getBarData(lastData, "a"));
    bar = bar.concat(getBarData(currentData, groupByYear ? "a" : "b"));
    setBar(bar);
    // console.log("bar: ", bar);

    // merge the data
    let mergedData = { ...currentData };
    for (let dataKey in lastData) {
      if (mergedData[dataKey] == undefined) {
        mergedData[dataKey] = { ...lastData[dataKey] };
      } else {
        mergedData[dataKey] = Object.assign(
          { ...mergedData[dataKey] },
          lastData[dataKey]
        );
      }
    }

    setCurrentData(currentData);
    // console.log("mergedData: ", mergedData);

    // let dataTable = {};
    // for (let key in mergedData) {
    //   dataTable[key] = [];
    //   for (let [innerKey, innerValue] of Object.entries(mergedData[key]))
    //     dataTable[key].push({
    //       name: innerKey,
    //       value: innerValue,
    //       ratio: innerValue / Object.values(mergedData[key]).reduce((a, b) => a + b),
    //     })
    // }
    // console.log("dataTable: ", dataTable);

    
    let totalData = groupByYear ? mergedData : currentData;
    let calculateTotal = {};
    for (let key in totalData) {
      if (calculateTotal[key] == undefined) {
        calculateTotal[key] = Object.values(totalData[key]).reduce((a, b) => a + b)
      }
    }
    setTotal(calculateTotal);

    let arrayData = objectToSortedArray(mergedData);

    setData(arrayData);
    setColorByTagname(colorByTagname);
    // console.log("arrayData: ", arrayData);
  }, [activeSub]);

  // console.log("bar", bar);
  // console.log('total: ', total);

  let legendByValue = {};
  for (let tagname in colorByTagname) {
    let shortTagname = tagname.substring(0, tagname.length - 4);
    legendByValue[shortTagname] = {
      color: colorByTagname[tagname],
      dataKey: tagname,
      type: "rect",
      value: shortTagname,
    };
  }
  // console.log("legendByValue: ", legendByValue);

  let legendPayload = Object.values(legendByValue);
  // console.log("legendPayload: ", legendPayload);

  return (
    <Fragment>
      {withRevenue ? <Title75 title={"Amount / Revenues"}/> : <Title75 title={"Amount / Expenses"}/>}
      <BarChartWrapper>
        <LeftContainer>
          <Table data={ groupByYear ? removeYearFromObjectKeys(data) : removeYearFromObjectKeys(objectToSortedArray(currentData)) } total={total} withRevenue={withRevenue}/>
        </LeftContainer>
        <div className="barchart">
          <BarChart
            width={400}
            height={400}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barGap={5}
            barCategoryGap="10%"
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              label={{
                value: groupByYear ? "Year" : "Month",
                position: "insideBottomRight",
                offset: 0,
              }}
            />
            <YAxis label={{ value: "CHF", angle: -90, position: "left" }} />
            <Tooltip />
            <Legend
              payload={legendPayload}
              wrapperStyle={{ paddingBottom: "10px", paddingTop: "10px" }}
            />
            {
              // legend.map(l => <Bar dataKey={l.name} stackId={l.stack} fill={withRevenue ? '#8884d8' : 'red'} />)
              bar.map((l) => (
                <Bar
                  dataKey={l.name}
                  stackId={l.stack}
                  fill={colorByTagname[l.name]}
                />
              ))
            }
          </BarChart>
        </div>
      </BarChartWrapper>
    </Fragment>
  );
};

export default DashboardBarsChart;
