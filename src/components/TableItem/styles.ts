import styled from "styled-components";


export const TableLine = styled.tr`

`

export const TableColumn = styled.td`
    padding: 10px 0;

`

export const Category = styled.div<{color: string}>`
 display: inline-block;
 width: 80%;
 text-align: center;
 padding: 5px 10px;
 border-radius: 5px;
 color: #FFF;
 background-color: ${props => props.color};
`

export const Value = styled.div<{expense: boolean}>`
 display: inline-block;
 color : ${props => props.expense ? 'red' : 'green'}
`