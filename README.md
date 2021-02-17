# desafio-front

# Funcionalidades desenvolvidas 
  * Administrador
    * Incluir, excluir, atualizar e visualizar medicamentos. (Atento as válidações)
    * Vendas Totais (Valor total e unidades vendidas)
    * Gráfico com vendas 
    * Vendas por vendedor
  * Vendedor
    * Visualizar Medicamentos
    * Incluir e Cancelar vendas de Medicamentos. (Uma venda tem medicamentos, quantidades, um vendedor responsável e o valor)

# Para acessar
  ## Visão de administrador 
    Fiz algo bem intuitivo, o botão para visualizar a página como administrador estará escrito "Administrador"
  ## Visão de Vendedor 
    Fiz algo bem intuitivo, o botão para visualizar a página como vendedor estará escrito "Vendedor"

# Ambiente 
  * Clone o projeto em https://github.com/gabriel-leadbase/Desafio-Vue.js.git


## Instale as depêndencias
```
npm install
```

### Compile e rode para ter acesso ao projeto locamente
```
npm run serve
```

# Decisões
## Vuex
  * Vuex para gerenciamento de estado de estoque e de vendas
## Router 
  * Para poder navegar entre as páginas
## Dados mock
  * Como o desafio era algo mais voltado ao front, utilizei dados mock _hardcoded_ para uma melhor visualização