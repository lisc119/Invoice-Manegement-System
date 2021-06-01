import React, { Fragment, useEffect, useState } from "react";

import { LeftContainer } from "./style";
import { StandardWindow } from '../../style/Container';

import { PieChart, Pie, Cell, Sector } from "recharts";

const dummydata = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 100 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#523234"];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`CHF ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`${(percent * 100).toFixed(2)}%`}
      </text>
    </g>
  );
};

const AnalysisPieChart = ({ props }) => {
    const [pieData, setPieData] = useState(dummydata);
    const [activeIndex, setactiveIndex] = useState();

    const onPieEnter = (data, index) => {
        setactiveIndex(index);
    };

    useEffect(() => {
        let data = [];

        const getData = () => {
            props.map((art) => {
                const found = data.some(
                (element) => element.name === art.item
                );
                if (!found) {
                data.push({
                    name: art.item,
                    value: art.total_price,
                });
                } else {
                data.map((entry) => {
                    return entry.name === art.item
                    ? (entry.value += art.total_price)
                    : null;
                });
                }
            });

        };
        getData();
        setPieData(data);
        let byName = data.slice(0);
        byName.sort(function (a, b) {
        var x = a.name.toLowerCase();
        var y = b.name.toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
        });
        setPieData(byName);
  }, [props]);

  return (
    <Fragment>
        <StandardWindow>
            <LeftContainer>
                <div className="piechart">
                <PieChart width={750} height={520}>
                    <Pie
                    activeShape={renderActiveShape}
                    activeIndex={activeIndex}
                    data={pieData}
                    cx={370}
                    cy={250}
                    innerRadius={130}
                    outerRadius={210}
                    fill="#8884d8"
                    dataKey="value"
                    onMouseEnter={onPieEnter}
                    >
                    {pieData.map((entry, index) => (
                        <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                        />
                    ))}
                    </Pie>
                </PieChart>
                </div>
            </LeftContainer>
        </StandardWindow>
    </Fragment>
  );
};

export default AnalysisPieChart;
