## Instale as dependências:
    npm install

## Iniciar Project:
    quasar dev

## Login:
    Administrador: login: admin   senha: admin
    Vendedor 1: login: joao01   senha: joao01
    Vendedor 2: login: alisson01   senha: alisson01

## O que o projeto atende?
    Visão de Administrador:
        - Incluir, excluir, atualizar e visualizar medicamentos.
        - Vendas Totais (Valor total, ticket médio e unidades vendidas).
    
    Visão de Vendedor:
        - Visualizar medicamentos.
        - Incluir vendas de medicamentos.

    Ambos (Não incluso no desafio):
        - Login/logout utilizando store.
        - Visualizar qual perfil que está logado.

## Algumas considerações:
    Foi utilizado Quasar com Vue.js para desenvolver o desafio.
    
    Na tabela de Medicamentos da página de administração, não consegui encontrar uma forma de pegar os objetos pelos index dentro da tabela, então tive que fazer uma "gambiarra", que acabou deixando o código meio feio e repetitivo em algumas funções que interagem com essa tabela, como exclusão e edição.