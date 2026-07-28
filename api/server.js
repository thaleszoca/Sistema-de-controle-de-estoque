import express from 'express'

//atribui tudo do express na constante app
const app = express();

//por padrao, o express não usa json, então tem que fazer isso manualmente
app.use(express.json())

//criando um array com valores vazios, onde vai estar as informações dos usuários
const users = []

//usando o metodo post para criar usuários
app.post('/usuarios', (req, res) => {
   //fazendo o usuario cadastrado entrar dentro do array (não entendi mt bem o req.body)
   users.push(req.body)

   res.send('ok aqui deu certo')

   res.json[req.body]
})

//usando o método get, que serve pra listar. req é a requisição (pergunta) e res, a resposta
app.get('/usuarios', (req, res) => {
   res.json(users)
})



app.listen(3000)