import styled from 'styled-components'
import * as theme from '../../AllThemes/theme'

export const Container = styled.div`
  background: #fff;
  box-shadow: 0rem 0rem 0.313rem #ccc;
  border-radius: 0.625rem;
  padding: 20px;
  margin-top: 20px;
  display: flex;
  align-items: center;
`
export const InputLabel = styled.label`
  flex: 1;
  margin: 10px;
`

export const InputTitle = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`

export const Input = styled.input`
  width: 100%;
  height: 30px;
  padding: 0 5px;
  border: 1px solid lightblue;
  border-radius: 5px;
`

export const Select = styled.select`
  width: 100%;
  height: 30px;
  background: #fff;
  padding: 0 5px;
  border: 1px solid lightblue;
  border-radius: 5px;
`

export const Button = styled(theme.DarkButton)`
  width: 100%;
  height: 30px;
  padding: 0 5px;
  border: 1px solid #000;
  border-radius: 5px;
  cursor: pointer;''

`
