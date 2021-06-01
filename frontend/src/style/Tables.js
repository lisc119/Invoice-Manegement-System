import { colors, fontSizes } from "./Theme";
import styled from 'styled-components';


export const AnalysisTable = styled.div`
    padding: 1rem;
    min-width: 500px;
    width: 50%;

    table {
        border-spacing: 0;
        border: 1px solid black;

    tr {
        :last-child {
            td {
            border-bottom: 0;
            }
        }
    }

    th,
    td {
    margin: 0;
    padding: 0.5rem;
    border-bottom: 1px solid black;
    border-right: 1px solid black;

    :last-child {
        border-right: 0;
        }
    }
    tr {
      background-color: white !important;
      border: 1px solid lighten($baseColor, 20%);
      border-radius: $borderRadius;
      box-shadow: 2px 2px 0 rgba(0,0,0,0.1);
      margin: 0.5rem 0;
      padding: 0;
   }
   
   .table-users { 
      border: none; 
      box-shadow: none;
      overflow: visible;
   }
}
`

export const ItemsTable = styled.div`
    padding: 1rem 5rem 1rem 5rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    table {
        border-spacing: 0;
        width: 100%;
        text-align: center;

        tr {
            background-color: ${colors.grey};
        }

        th,
        td {
            color: darken(#398B93, 10%);
            padding: 10px;

            :last-child {
                border-right: 0;
                font-size: 0.95em;
                line-height: 1.4;
                text-align: left;
            }
        }

        th { 
            background-color: lighten(#398B93, 50%);
            font-weight: 300;
        }
        tr {     
            &:nth-child(2n) { background-color: ${colors.white}; }
            &:nth-child(2n+1) { background-color: ${colors.blueLight} }
        }
        tr {
            /* background-color: white !important; */
            border: 1px solid lighten(#398B93, 20%);
            border-radius: 10px;
            box-shadow: 2px 2px 0 rgba(0,0,0,0.1);
            margin: 0.5rem 0;
            padding: 0;
        }
    
    }
`

export const NewInvoiceTable = styled.div`
    padding: 1rem 5rem 1rem 5rem;
    width: 100%;
    text-align: center;
    font-size: ${fontSizes.normal};


    table {
        border-spacing: 0;
        width: 100%;
        text-align: center;
        
        th,
        td {
            /* color: darken(#398B93, 20%); */
            padding: 12px;
        }

        tr {     
            &:nth-child(2n) { background-color: ${colors.white}; }
            &:nth-child(2n+1) { background-color: ${colors.blueLight} }
        }
        tr {
            border: 1px solid lighten(#398B93, 20%);
            border-radius: 10px;
            box-shadow: 2px 2px 0 rgba(0,0,0,0.1);
            margin: 0.5rem 0;
            padding: 0;
        }
    
    }
`

export const EditInvoiceDiv = styled.div`
    padding: 1rem 5rem 1rem 5rem;
    width: 100%;
    text-align: center;
    font-size: ${fontSizes.normal};
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    table {
        border-spacing: 0;
        width: 45%;
        text-align: center;
        
        th,
        td {
            /* color: darken(#398B93, 20%); */
            padding: 12px;
        }

        tr {     
            &:nth-child(2n) { background-color: ${colors.white}; }
            &:nth-child(2n+1) { background-color: ${colors.blueLight} }
        }
        tr {
            border: 1px solid lighten(#398B93, 20%);
            border-radius: 10px;
            box-shadow: 2px 2px 0 rgba(0,0,0,0.1);
            margin: 0.5rem 0;
            padding: 0;
        }
    
    }
`
