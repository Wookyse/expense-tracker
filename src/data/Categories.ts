import { Category } from '../types/Category'

export const Categories: Category = {
  salary2: { title: 'Extra/Comissão', color: 'green', expense: false },
  salary: { title: 'Salário', color: 'green', expense: false },
  rent: { title: 'Aluguel', color: 'brown', expense: true },
  food: { title: 'Comida', color: 'blue', expense: true },
  buy: { title: 'Compras', color: 'orange', expense: true },
  card: { title: 'Fatura Cartão', color: 'red', expense: true },
  billsToPay: { title: 'Contas a Pagar', color: 'blue', expense: true }
}
