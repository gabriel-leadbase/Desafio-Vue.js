### Passos para executar o projeto

OBS: \*\*\* Voce deve ter instalado em sua máquina o quasar CLI
1 - executrar o comando "npm install" na raiz do projeto
2 - executar o comando "npx quasar dev" na raiz do projeto

### Passos para logar

- foi criado dois login fakes
- login admin >> email: admin@hotmail.com senha: 123
- login vendedor >> email: vendedor@hotmail.com senha: 123

### Passos para rodar teste com o jest

- executar o comando: quasar test --unit jest ou npx quasar test --unit jest

### minhas notas

- utilizei o Quasar e o quasar CLI para criação rápida do projeto
- separei os components vue drawer e toolbar para serem
  reutilizados pelos layoutsdo admin e do vendedor
- utilizei single files components para tentar deixar o código mais legível e entendivél por quem
  está lendo-o.
- como não tinha um backend, coloquei arquivos estaticos para preencherem as tabelas de medicamentos
