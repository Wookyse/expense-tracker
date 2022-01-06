import { Category } from '../types/Category'

export const Categories: Category = {
  rent: { title: 'Aluguel', color: 'brown', expense: true },
  food: { title: 'Comida', color: 'blue', expense: true },
  billsToPay: { title: 'Contas', color: 'blue', expense: true },
  buy: { title: 'Compras', color: 'orange', expense: true },
  card: { title: 'Fatura Cart', color: 'red', expense: true },
  salary2: { title: 'Extra/Comissão', color: 'green', expense: false },
  salary: { title: 'Salário', color: 'green', expense: false }
}
