# APP-Correios

Olá, bem vindo a minha aplicação. Este projeto foi criado direcionado para o desafio da Postaqui Logística, para a vaga de estágio em desenvolvimento frontend com ReactJS. Neste projeto utilizei do React, MUI, Hooks, Styled Components e o Axios para o frontend.
Para o backend, utilizei NodeJS, MongoDB e Express. Abaixo seguimentara os passos que utilizei para criar a aplicação.

Para a troca de informações global na aplicação, utilizei do ContextAPI, para passar informações dentre todas as páginas. O DataProvider esta localizado na pasta provedor-dados.

Durante os testes que realizei enquanto estava fazendo minhas requisições, aparentemente o Header que vocês criaram para mim entrou em um loop infinito de requisições no momento em que estava estilizando o determinado componente de requisição.
Estou recebendo o erro 429, ao logar as informações no prompt recebo que o meu x-reatelimit-reset esta para 1693737272, basicamente um ban para o Header, se de alguma forma poderem fazer outro Header para testar minha aplicação, com as exatas mesmas Request 
e Response, ficarei muito grato, a aplicação fora isso esta 100% funcional e fazendo o que se pede.

Base URL com o erro  429: https://f29faec4-6487-4b60-882f-383b4054cc32.mock.pstmn.io/
Locais que se encontram as request para o Header:
  api-correios -> components -> dados-pacote -> Dados-pacote.jsx
  back-end -> controllers -> shipmentController.js

Step 1
------------------------------------------------------------------
Preenchimento das informações sobre o remetente da correspondência. Onde coloquei todos os inputs como obrigatórios e também as devidas mascaras para o Telefone, CPF e o CEP. O CPF possui um validador de sintaxe para o input que será digitado,
o usuario precisa colocar exatamente o formato do CPF, ou não será permitido a entrada de dados. Para o CEP, utilizei da API Via Cep, que ao dar um get nas informações passadas pelo input, ele retorna um JSON com os dados do CEP buscado.

Step 2
------------------------------------------------------------------
Basicamente o que se ocorre na primeira Step, o balãozinho com os dados de origem aparece na parte superior, e ao clicar nele, será redirecionado para o Step 1, que conterá todas as informações que foram passadas ainda.

Step 3
------------------------------------------------------------------
Basicamente o que se ocorre na primeira Step, o balãozinho com os dados de origem aparece na parte superior, e ao clicar nele, será redirecionado para o Step 1, que conterá todas as informações que foram passadas ainda.




