###### Passos para executar o projeto

OBS: \*\*\* Voce deve ter instalado em sua máquina o quasar CLI
1 - executrar o comando "npm install" na raiz do projeto
2 - executar o comando "npx quasar dev" na raiz do projeto

###### Passos para logar

- foi criado dois login fakes
- login admin >> email: admin@hotmail.com senha: 123
- login vendedor >> email: vendedor@hotmail.com senha: 123

###### Passos para rodar testes com o jest

- executar o comando: quasar test --unit jest ou npx quasar test --unit jest

###### Minhas notas

- utilizei o Quasar e o quasar CLI para criação rápida do projeto

- fiz apenas dois components drawer e toolbar para serem
  reutilizados pelos layouts do admin e do vendedor

- utilizei single files components para tentar deixar o código mais legível e entendível por quem
  está lendo-o.

- como não tinha um backend, coloquei arquivos estaticos para preencherem as tabelas de medicamentos
- as pastas nomeadas "data" comtêm arquivos dados que viriam de uma api.

- adicionei mapActions para o usuario acessar suas actions, e também para deixar o código mais limpo

- Implementei um bloqueio simples para o usuário não acessar a rota login caso esteja logado.
  utilizei beforeach e as funções ifAuthenticated, ifNotAuthenticated.
  - Utilizei também o vuex persister para persistir os dados do state

Administrador

Vendedor

- Na tela de vendedor o vendedor pode escolher os itens que serã vendidos, quando ele escolhe libero o
  botão "Realizar venda".
- no modal "Incluir Venda" ele pode alterar a quantidade de produtos
