import React, { Fragment, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { useDispatch } from 'react-redux';

import newInvoiceAction from './../../store/actions/newInvoiceAction';
import newArticleAction from './../../store/actions/newArticleAction';
import getInvoiceAction from '../../store/actions/getInvoiceAction';

import { MainBodyContainer, StandardWindow, TitleDiv } from '../../style/Container';
import { FormGroup, Label2, Input2, Password } from '../../style/Inputs';
import { TopGroup, TopLeft, TopRight, MiddleGroup, BottomGroup, SpaceLeft, SpaceRight, CheckPriceDiv, CheckDiv, PriceDiv, YellowButtonStyle } from "../../style/DataPageNew";
import { NewInvoiceTable } from '../../style/Tables';
import Titles100 from "../BaseComponents/Titles/Titles100";
import { useTable, useSortBy } from 'react-table';

function Table({ columns, data }) {
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
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


const NewInvoice = ( { token } ) => {
    const [startDate, setStartDate] = useState(new Date());
    const [shopName, setShopName] = useState('');
    const [ articleName, setArticleName ] = useState();
    const [ articleQuantity, setArticleQuantity ] = useState();
    const [ articlePrice, setArticlePrice ] = useState();
    const [ articleTag, setArticleTag ] = useState();

    const [ invoice, setInvoice ] = useState([]);

    const dispatch = useDispatch();

    
    const InputStartDate = ({ value, onClick }) => (
        <Fragment>
                <Label2 for="newInvoiceDate">Date</Label2>
                <Input2 type="text" onClick={onClick} placeholder={value} name="newInvoiceDate" id="newInvoiceDate" />
        </Fragment>
    );

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
                    Header: 'Name',
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

    let data = invoice.articles

    const handleSubmit = (event) => {
        event.preventDefault();
        const getData = async () => {
            const data = await dispatch(newInvoiceAction(startDate.toISOString().slice(0, 10), shopName, token));
            setInvoice(data)
        };
        getData();
    }

    const handleSubmitItem = (event) => {
        event.preventDefault();
        const doActions = async () => {
            await dispatch(newArticleAction(articleName, articlePrice, articleQuantity, articleTag, invoice.id, token));
            const data = await dispatch(getInvoiceAction(invoice.id, token));
            setInvoice(data);
        }
        doActions();
    }

    return (
        <Fragment>
            <MainBodyContainer RightColumn>
                
                <StandardWindow>
                    <Titles100 title={"New Invoice"} />
                    <form>
                        <TopGroup>
                            <TopLeft>
                                <FormGroup>                                                        
                                    <DatePicker
                                        selected={startDate}
                                        onChange={date => setStartDate(date)}
                                        customInput={<InputStartDate />}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Input2 type="text" name="Shop" id="Shop" onChange={(event) => setShopName(event.target.value)}/>
                                    <Label2 for="Shop">Shop / Supplier</Label2>
                                </FormGroup>
                            </TopLeft>
                            <TopRight>
                                <FormGroup>
                                    <YellowButtonStyle onClick={handleSubmit}>
                                        Create Invoice
                                    </YellowButtonStyle>
                                </FormGroup>
                                <FormGroup>
                                    {invoice ? <h2>Invoice ID:    {invoice.id}</h2> : null}
                                </FormGroup>
                            </TopRight>
                        </TopGroup>

                        <MiddleGroup>
                            <FormGroup>
                                <Input2 type="text" name="Item" id="Item" onChange={(event) => setArticleName(event.target.value)}/>
                                <Label2 for="Item">Item</Label2>
                            </FormGroup>
                            <FormGroup>
                                <Input2 type="text" name="Quantity" id="Quantity" onChange={(event) => setArticleQuantity(event.target.value)}/>
                                <Label2 for="Quantity">Quantity</Label2>
                            </FormGroup>
                            <FormGroup>
                                <Input2 type="text" name="Price" id="Price" onChange={(event) => setArticlePrice(event.target.value)}/>
                                <Label2 for="Price">Price</Label2>
                            </FormGroup>
                            <FormGroup>
                                <Input2 type="text" name="Tag" id="Tag" onChange={(event) => setArticleTag(event.target.value)} />
                                <Label2 for="Tag">Tag</Label2>
                            </FormGroup>
                        </MiddleGroup>

                        <BottomGroup>
                            <SpaceLeft/>
                            <SpaceRight>
                                <CheckPriceDiv>
                                    <CheckDiv>
                                        <p>Check Total:    </p>
                                        <h2 style={{paddingLeft:"20px", fontWeight:"600"}}>{invoice ? invoice.total_amount : "0.0"} </h2>
                                    </CheckDiv>
                                </CheckPriceDiv>
                                <YellowButtonStyle onClick={handleSubmitItem}>
                                    Add Item
                                </YellowButtonStyle>
                            </SpaceRight>
                        </BottomGroup>

                    </form>
                </StandardWindow>

                <StandardWindow>

                    <Titles100 title={"Overview"} />

                            <NewInvoiceTable>
                                {invoice.length != 0 
                                ? <Table columns={columns} data={data} /> 
                                : <h3>Please add Articles to your Invoice</h3>}  
                            </NewInvoiceTable>

                </StandardWindow>
            </MainBodyContainer>
        </Fragment>
    );
};

export default NewInvoice