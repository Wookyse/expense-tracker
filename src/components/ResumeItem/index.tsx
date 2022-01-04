import * as C from './styles'

type Props = {
  title: string
  value: number
  color?: string
}

export const ResumeItem = ({ title, value, color }: Props) => {
  const formatValue = Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(value)

  return (
    <C.Container>
      <C.Title>{title}</C.Title>
      <C.Info color={color}>{formatValue}</C.Info>
    </C.Container>
  )
}
