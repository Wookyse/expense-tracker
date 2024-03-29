import * as C from './styles'
import { Item } from '../../types/Item'
import { useState } from 'react'
import { Categories } from '../../data/Categories'
import * as yup from 'yup'

type Props = {
  onAdd: (item: Item) => void
}

export const InputArea = ({ onAdd }: Props) => {
  const [dateField, setDateField] = useState('')
  const [categoryField, setCategoryField] = useState('')
  const [titleField, setTitleField] = useState('')
  const [valueField, setValueField] = useState(0)

  //Formater to BRL
  // const formatValue = new Intl.NumberFormat('pt-br', {
  //   style: 'currency',
  //   currency: 'BRL'
  // }).format(valueField)

  let categoryKeys: string[] = Object.keys(Categories)

  let schema = yup.object().shape({
    titleField: yup.string().required('Título inválido!'),
    valueField: yup.number().required('Valor inválido!').positive().integer(),
    categoryField: yup.string().required('Categoria inválida!'),
    dateField: yup.date().default(function () {
      return new Date()
    })
  })

  const handleAddEvent = () => {
    let errors: string[] = []

    if (isNaN(new Date(dateField).getTime())) {
      errors.push('Data inválida!')
    }
    if (!categoryKeys.includes(categoryField)) {
      errors.push('Categoria inválida!')
    }
    if (titleField === '') {
      errors.push('Título inválido!')
    }
    if (valueField <= 0) {
      errors.push('Valor inválido!')
    }
    if (errors.length > 0) {
      alert(errors.join('\n'))
    } else {
      onAdd({
        date: new Date(dateField),
        category: categoryField,
        title: titleField,
        value: valueField
      })
      clearFields()
    }
  }
  const clearFields = () => {
    setDateField('')
    setCategoryField('')
    setTitleField('')
    setValueField(0)
  }

  return (
    <C.Container>
      <C.InputLabel>
        <C.InputTitle>Data</C.InputTitle>
        <C.Input
          type="date"
          value={dateField}
          onChange={e => setDateField(e.target.value)}
        />
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>Categoria</C.InputTitle>
        <C.Select
          value={categoryField}
          onChange={e => setCategoryField(e.target.value)}
        >
          <>
            <option></option>
            {categoryKeys.map((key, index) => (
              <option key={index} value={key}>
                {Categories[key].title}
              </option>
            ))}
          </>
        </C.Select>
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>Título</C.InputTitle>
        <C.Input
          type="text"
          value={titleField}
          onChange={e => setTitleField(e.target.value)}
        />
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>Valor</C.InputTitle>
        <C.Input
          type="number"
          value={valueField}
          onChange={e => setValueField(parseFloat(e.target.value))}
        />
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>&nbsp;</C.InputTitle>
        <C.Button onClick={handleAddEvent}>Adicionar</C.Button>
      </C.InputLabel>
    </C.Container>
  )
}
