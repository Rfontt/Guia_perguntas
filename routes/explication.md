
**As rotas serão separadas do index.js(file principal que roda o servidor) por questões de organização e de fácil manutenção futuramente.**

É de conhecimento geral que precisamos de rotas para chegarmos em diferentes lugares. E em um sistema de computador não é diferente, o express irá ajudar na criação dessas rotas.

Utilizaremos o express.Route(); para conseguirmos realizar essas rotas.

Como dito anteriomente, utilizaremos o express para gerenciar as rotas.
```
const express = require('express');
const router = express.Router();

```

Em todos os arquivos precisamos utilizar essa estrutura de importação, pois é obrigatório para as rotas funcionar.

Com a instância de manuseio de rotas na variável router, podemos iniciar qualquer rota. (GET, POST, PUT, DELETE).

As rotas desse backend será divididas em GET E POST, em sua maioria GET, pois é a de buscar informações. Apenas em duas utilizaremos POST, a qual é para criar uma pergunta e a outra cria uma resposta. 

Sabendo disso, começaremos com a home.
Como é peceptível nas pastas Views/Home a home é apenas uma amostra visual das perguntas e com um button que leva a outra página de fazer pergunta ou rssponder a uma.

Para iniciar qualquer rota é preciso seguir a seguinte estrutura:

```
router.get, post, delete, put("/", (req, res)=> {
	
});

```
module.exports = router;

Essa estrutua é a base, pois router é a instância do express.router(); que vai gerenciar essa rota que está sendo criada. 
O método é o segundo a ser expresso. Pode-se usar get, post, delete, etc... Depende de qual tipo de rota você deseja. Nesse caso, a home vai mostrar as perguntas feitas então ficará com o get.
A barra ("/") indica o caminho que essa rota vai percorrer. Ela pode vim seguida de um nome que você desejar para nomear a rota, porém como é a página home deixamos só a barra para indicar que está na raiz do sistema, ou seja, na home.
Essa rota recebe uma função(nesse caso uma Arrow Function) com os parâmetros req, res que serão responsáveis pela realizar a comunicação com o usuário recebendo suas REQUISIÇÕES e devolvendo RESPONSE(Respostas).