import { PercentageTable, TableWrapper, Title } from "./style";

export const Table = (props) => {
  let data = props.data;
//   console.log('Table: data: ', data);
  let total = props.total;
//   console.log('Table: total: ', total);
  let withRevenue = props.withRevenue;
  

  let tableData = {};

//   tableData = {
//     2019: {
//       Food: 1312,
//     },
//     2020: {},
//   };


  let rows = new Set();
  for (let [key, value] of Object.entries(data)) {
    for (let tagname in value) {
      if (tagname != "name") {
        rows.add(tagname);
      }
    }
  }
//   console.log('Table: rows: ', rows);

  return (
    <TableWrapper>
      <PercentageTable>
        <thead>
          <tr>
            <th>Tag</th>
            {data.map((d) => {
              return <th>{d.name}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {Array.from(rows).sort().map((r) => {
            return (
              <tr>
                <td>{r}</td>
                {data.map((d) => {
                  let value = d[r];
                  if (value && total[d.name] != 0) {
                    return (
                      <td>{(100 * (value / total[d.name])).toFixed(2)}%</td>
                    );
                  } else {
                    return <td></td>;
                  }
                })}
              </tr>
            );
          })}
        </tbody>
      </PercentageTable>
    </TableWrapper>
  );
};
