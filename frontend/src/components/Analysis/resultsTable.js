import React from 'react';

import { ResultsContainer } from './style';
import { ItemsTable } from '../../style/Tables';
import { useTable, useSortBy } from 'react-table';


function Table({ columns, data }) {
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
      // state: { selectedRowIds },
    } = useTable(
      {
        columns,
        data,
      },
      useSortBy,
      hooks => {
        hooks.visibleColumns.push(columns => [
          ...columns,
        ])
      }
    )
    return (
      <>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render('Header')}
                    <span>
                        {column.isSorted
                        ? column.isSortedDesc
                            ? ' 🔽'
                            : ' 🔼'
                        : ''}
                    </span>
                    </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.slice(0, 10).map((row, i) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </>
    )
}


const ResultsTable = ( { props }) => {

    const columns = React.useMemo(
        () => [
          {
            Header: 'Articles',
            columns: [
                {
                Header: 'Date',
                accessor: 'date',
                },
                {
                    Header: 'Name.',
                    accessor: 'item',
                },
                {
                    Header: 'Price',
                    accessor: 'price',
                },
                {
                    Header: 'Quantity',
                    accessor: 'quantity',
                },
                {
                    Header: 'Total',
                    accessor: 'total_price',
                },
                {
                    Header: 'Tag',
                    accessor: 'tag.title',
                },
            ],
          },
        ],
        []
    )
    
    return (
        <ResultsContainer>

            <ItemsTable>
                <Table columns={columns} data={props}/>
            </ItemsTable>

        </ResultsContainer>
    );
};

export default ResultsTable