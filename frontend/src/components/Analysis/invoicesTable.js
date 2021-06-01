import React, { useEffect, useState } from 'react';

import { ResultsContainer } from './style';
import { ItemsTable } from '../../style/Tables';

import { useTable, useRowSelect, useSortBy } from 'react-table';


// const IndeterminateCheckbox = React.forwardRef(
//     ({ indeterminate, ...rest }, ref) => {
//       const defaultRef = React.useRef()
//       const resolvedRef = ref || defaultRef
  
//       React.useEffect(() => {
//         resolvedRef.current.indeterminate = indeterminate
//       }, [resolvedRef, indeterminate])
  
//       return (
//         <>
//           <input type="checkbox" ref={resolvedRef} {...rest} />
//         </>
//       )
//     }
// )

function Table({ columns, data, setSelected }) {
    // Use the state and functions returned from useTable to build your UI
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    //   selectedFlatRows,
      state: { selectedRowIds },
    } = useTable(
      {
        columns,
        data,
      },
      useSortBy,
      // useRowSelect,
      hooks => {
        hooks.visibleColumns.push(columns => [
          // Let's make a column for selection
        //   {
        //     id: 'selection',
        //     // The header can use the table's getToggleAllRowsSelectedProps method
        //     // to render a checkbox
        //     Header: ({ getToggleAllRowsSelectedProps }) => (
        //       <div>
        //         <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
        //       </div>
        //     ),
        //     // The cell can use the individual row's getToggleRowSelectedProps method
        //     // to the render a checkbox
        //     Cell: ({ row }) => (
        //       <div>
        //         <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
        //       </div>
        //     ),
        //   },
          ...columns,
        ])
      }
    )

    // useEffect(() => {
    //     setSelected(Object.keys(selectedRowIds))
    // }, [selectedRowIds])
  
    // Render the UI for your table
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
        {/* <p>Selected Rows: {Object.keys(selectedRowIds).length}</p> */}
      </>
    )
}


const InvTable = ( { props }) => {
    const [ selected, setSelected ] = useState([]);
    const [ selectedItems, setSelectedItems ] = useState();
    

    // console.log(props)
    // console.log(props[0])
    // console.log(selected)



    const columns = React.useMemo(
        () => [
          {
            Header: 'Invoice',
            columns: [
              {
                Header: 'Nr.',
                accessor: 'id',
              },
              {
                Header: 'Date',
                accessor: 'date',
              },
              {
                Header: 'Shop',
                accessor: 'shop',
              },
              {
                Header: 'Nr. Items',
                accessor: 'number_of_articles',
              },
              {
                Header: 'Total',
                accessor: 'total_amount',
              },
            ],
          },
        ],
        []
    )

    const data = props
    let data2 = props

    useEffect(() => {
        data2 = props
        console.log(selected, props)
    }, [selected])
    
    return (
        <ResultsContainer>

            <ItemsTable>
                <Table columns={columns} data={data} setSelected={setSelected} />
            </ItemsTable>

            {/* <ItemsTable>
                <Table columns={columns2} data={data2} setSelected={setSelectedItems} />
            </ItemsTable> */}


        </ResultsContainer>
    );
};

export default InvTable