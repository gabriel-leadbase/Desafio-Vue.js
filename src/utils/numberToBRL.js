export default function numberToBRL (currency) {
  currency = Number(currency)
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(currency)
}
