# Explicações dos models:

Dentro da pasta database, criei a pasta models para armazenar os arquivos de models, os quais ficam responsáveis pela criação de tabelas do banco de dados. 


# Linhas de códigos dos models:

Em primeiro momento, é preciso instânciar o Sequelize e guardá-lo em uma variável. 

```
const Sequelize = require('sequelize');

```
Logo depois, é necessário importar a conexão com o banco de dados que está um arquivo atrás de nossa pasta atual. (Dentro da pasta database - na qual estamos - nomeado de database.js).

```
const connection = require('../database');


```
Feito isso, podemos começar a criar a primeira tabela de perguntas. A escolha foi de guardar essa tabela em uma constante, para que, futuramente, o seu conteúdo não seja subscrito.

Pelo comando:
```
connection.define('Nome da tabela', {
	nome das colunas: {
		type: SEQUELIZE.STRING/INTEGER/ETC,
		allowNUll: false
		} 
});
```
falamos através de códigos ao interpretador JS, que queremos definir uma tabela com um determinado nome e que essa tabela terá determinadas colunas.
Lembrando que esse connection é apenas a variável que recebe a importação do arquivo da conexão com o banco de dados.

O nome da tabela será Questions e recebe as colunas: title e description. Ambas possuem um tipo, na primeira foi definido Sequelize.STRING e na segunda Sequelize.TEXT, a diferença entre as duas é que a STRING é indicada como um texto com poucos caracteres, ou seja, um texto curto e o TEXT é um estrutura mais grande e com mais caracteres. Como foi trabalhado com o ORM Sequelize então sempre que for para definir o tipo é preciso mencioná-lo antes da definição do tipo. Em seguida, definimos o allowNull como false, isso apenas indica que o campo não pode ser nulo, ou seja, é obrigatório.

Para finalizar é necessário tratar com uma promisse a criação dessa tabela, para que seja evitado futuros erros. Ademais, é mencionado que não utilizaremos force, pois caso a tabela já tiver criada não é necessário criá-la de novo.

```

Questions.sync({ force: false }).then(()=> {});
```
 **Observação**

Todos os comandos acima também se aplica para o segundo model criado. A única diferença é o nome da tabela e das colunas, além do mais há uma coluna a mais que faz um relacionamento com o id da tabela citada acima.