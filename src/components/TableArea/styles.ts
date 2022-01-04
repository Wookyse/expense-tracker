import styled from 'styled-components'

export const Table = styled.table`
  width: 100%;
  background: #ffffff;
  padding: 1.25rem;
  box-shadow: 0rem 0rem 0.3125rem #ccc;
  border-radius: 0.625rem;
  margin-top: 1.25rem;
`

export const TableHeadColumn = styled.th<{ width?: number }>`
  width: ${props => (props.width ? `${props.width}px` : 'auto')};
  padding: 0.625rem 0rem;
  text-align: left;
`
