import styled from 'styled-components'

export const TableLine = styled.tr``

export const TableColumn = styled.td`
  padding: 0.625rem 0rem;
`
export const Category = styled.div<{ color: string }>`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 5px;
  color: #fff;
  background: ${props => props.color};
`
export const Value = styled.div<{ color: string }>`
  color: ${props => props.color};
  font-weight: bold;
`
