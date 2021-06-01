import React, { Fragment } from 'react';
import { TitleDiv, KPITableCSS } from './style';

const KPITable = () => {

    return (
        <Fragment>
            <h2>KPIs</h2>
            <TitleDiv>
                <div className="leftColumn">
                    <h3>This Year</h3>
                    <h3>Year total</h3>
                </div>
                <div className="rightColumn">
                    <h3>321</h3>
                    <h3>32'324'323</h3>
                </div>
            </TitleDiv>

            <KPITableCSS>
                <tr>
                    <th>KPI</th>
                    <th>[%]</th>
                </tr>
                <tr>
                    <td>F & B</td>
                    <td>33</td>
                </tr>
                <tr>
                    <td>rex</td>
                    <td>23</td>
                </tr>
            </KPITableCSS>
        </Fragment>
    )
};

export default KPITable;