import React, { Fragment, useState, useEffect } from 'react';

import { EditInvoiceDiv } from '../../style/Tables';
import { useTable, useSortBy, useRowSelect } from 'react-table';

const IndeterminateCheckbox = React.forwardRef(
    ({ indeterminate, ...rest }, ref) => {
      const defaultRef = React.useRef()
      const resolvedRef = ref || defaultRef
  
      React.useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate
      }, [resolvedRef, indeterminate])
  
      return (
        <>
          <input type="checkbox" ref={resolvedRef} {...rest} />
        </>
      )
    }
)


export const EditInvoiceTable = ({results}) => {

  const [ selected, setSelected ] = useState('0');
  // const [ selected2, setSelected2 ] = useState(null);
  console.log(selected)

    function Table({ columns, data, setIndex }) {
        // Use the state and functions returned from useTable to build your UI
        const {
          getTableProps,
          getTableBodyProps,
          headerGroups,
          rows,
          prepareRow,
          selectedFlatRows,
          state: { selectedRowIds },
        } = useTable(
          {
            columns,
            data,
          },
          useSortBy,
          useRowSelect,
          hooks => {
            hooks.visibleColumns.push(columns => [
            {
              id: 'selection',
              // The header can use the table's getToggleAllRowsSelectedProps method
              // to render a checkbox
              Header: ({ getToggleAllRowsSelectedProps }) => (
                <div>
                  <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
                </div>
              ),
              // The cell can use the individual row's getToggleRowSelectedProps method
              // to the render a checkbox
              Cell: ({ row }) => (
                <div>
                  <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
                </div>
              ),
            },
              ...columns,
            ])
          }
        )

        // const onclickHandler = (event) => {
        //   event.preventDefault();
        //   console.log(event.target.value)
        // }

        // useEffect(() => {
        //   setIndex(Object.keys(selectedRowIds))
        // }, [selectedRowIds])
    
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
                        return <td {...cell.getCellProps()} >{cell.render('Cell')}</td>
                      })}
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </>
        )
    }

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

    const columns2 = React.useMemo(
      () => [
        {
          Header: 'Articles',
          columns: [
            {
              Header: 'Nr.',
              accessor: 'id',
            },
            {
              Header: 'Item',
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
        <Fragment>
            <EditInvoiceDiv>
                {(results.length >= 1)
                ? <Table columns={columns} data={results} setIndex={setSelected}/>
                : <p>No results</p>
                }
                {(results.length >= 1 && selected) ? 
                (
                  <table>
                    <tr>
                       <th>Somethinf</th>
                      <th>Somethinf</th>
                      <th>Somethinf</th>
                    </tr>
                    <tr>else
                      <td>item</td>
                      <td>item</td>
                    </tr>
                  </table>
                )
                : <p>No results</p>
                }
            </EditInvoiceDiv>
        </Fragment>
    )
};