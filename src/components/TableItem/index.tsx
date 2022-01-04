import * as C from './styles'
import { Item } from '../../types/Item'
import { formatDate } from '../../helpers/dateFilter'
import { Categories } from '../../data/Categories'

type Props = {
  item: Item
}

export const TableItem = ({ item }: Props) => {
  const formatValue = Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(item.value)

  return (
    <C.TableLine>
      <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
      <C.TableColumn>
        <C.Category color={Categories[item.category].color}>
          {Categories[item.category].title}
        </C.Category>
      </C.TableColumn>
      <C.TableColumn>{item.title}</C.TableColumn>
      <C.TableColumn>
        <C.Value color={Categories[item.category].expense ? 'red' : 'green'}>
          {Categories[item.category].expense ? '-' : '+'}&nbsp;
          {formatValue}
        </C.Value>
      </C.TableColumn>
    </C.TableLine>
  )
}
