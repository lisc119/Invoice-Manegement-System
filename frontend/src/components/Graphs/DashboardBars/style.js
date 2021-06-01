import styled from "styled-components";
import { colors } from "../../../style/Theme";

export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BarChartWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 300px;
  /* border-top: 2px solid ${colors.blue}; */
  padding-bottom: 5px;
  padding-top: 5px;
  /* border-bottom: 2px solid ${colors.blue}; */
  .barchart {
    display: flex;
    flex-grow: 1;
    flex-direction: row;
    justify-content: center;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;

  .leftColumn {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-width: 150px;

    div {
      margin-top: 10px;
      // border-top: 2px solid ${colors.gray};
      width: 240px;
    }
  }
  .rightColumn {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-end;
    div {
      margin-top: 10px;
      // border-top: 2px solid ${colors.gray};
    }
  }
`;

export const PercentageTable = styled.table`
  font-size: 1.17em;
  padding-bottom: 5px;
  padding-top: 5px;
  border-bottom: 2px solid ${colors.gray};

  thead {
    tr {
      
    }
    th {
      font-weight: bold;
      text-align: left;
    }
  }
  
  th, td {
    padding: 0 15px;

    &:first-child {
      padding-left: 0;
    }
    &:last-child {
      padding-right: 0;
    }
  }
`;