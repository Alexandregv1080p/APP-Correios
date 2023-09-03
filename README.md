# APP-Correios

Olá, bem vindo a minha aplicação. Este projeto foi criado direcionado para o desafio da Postaqui Logística, para a vaga de estágio em desenvolvimento frontend com ReactJS. Neste projeto utilizei do React, MUI, Hooks, Styled Components e o Axios para o frontend.
Para o backend, utilizei NodeJS, MongoDB e Express. Abaixo seguimentara os passos que utilizei para criar a aplicação.

Step 1
------------------------------------------------------------------
Preenchimento das informações sobre o remetente da correspondência. Onde coloquei todos os inputs como obrigatórios e também as devidas mascaras para o Telefone, CPF e o CEP. O CPF possui um validador de sintaxe para o input que será digitado,
o usuario precisa colocar exatamente o formato do CPF, ou não será permitido a entrada de dados. Para o CEP, utilizei da API Via Cep, que ao dar um get nas informações passadas pelo input, ele retorna um JSON com os dados do CEP buscado.

