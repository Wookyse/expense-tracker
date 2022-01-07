/* É USADO APENAS PARA PASSAR COR. As especificações do componente, é passada dentro do component, de acordo com o que passar no componente do theme, será aplicado as formas no component principal.
Exemplo:
export const DarkButton = styled.button`` <- aqui eu falo que o component que vai receber a cor é um bottão, tornando assim ele um botão, se não passar ele como um botão, ele não é reconhecido e/ou não é aplicado o formato que deve ser aplicado no componentem principál.
Exemplo:
export const Button = styled(theme.DarkButton)` <- aqui recebo somente a cor e a expecificação que é um botão.
  width: 100%;
  height: 30px;
  padding: 0 5px;
  border: 1px solid;
  border-radius: 5px;
  cursor: pointer;
`*/
//OBS.: Se atente onde vai colocar as cores, essas cores podem ser colocadas em qualquer componente, pois não passam nenhuma especificação de formato.

import styled from 'styled-components'

//----------------------------------------------------------------Beach Theme----------------------------------------------------------------
export const Beach = styled.div`
  background: greenyellow;
  color: DarkSlateBlue;
`
//----------------------------------------------------------------Dark Blue Theme----------------------------------------------------------------
// TERMINAR DE CONSERTAR OS TEMAS ;;;;;
//Header
export const DkBlue = styled.div`
  background: #144774;
  color: #ffffff;
`

//Collor Main
export const DkBlueMain = styled.div`
  background: #6fadd2;
`

//Button
export const DkBlueButton = styled.button`
  background: #6fadd2;
  color: #fff;
  opacity: 1;
  transition: 0.3s;
  :hover {
    color: #fff;
    background-color: #144774;
    opacity: 1;
  }
`

//----------------------------------------------------------------Dark Theme----------------------------------------------------------------

//Header
export const DarkHeader = styled.div`
  background: #1f1f1f;
  color: #ffffff;
`
//Collor Main
export const DarkMainColor = styled.div`
  background: #ccc;
`

//Button
export const DarkButton = styled.button`
  background: #ccc;
  color: black;
  opacity: 1;
  transition: 0.3s;
  &:hover {
    color: #fff;
    background-color: #000;
    opacity: 1;
  }
`
