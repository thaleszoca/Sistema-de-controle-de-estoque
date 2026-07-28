import express from 'express'

//atribui tudo do express na constante app
const app = express();

const users = []
/* o get é um método http, pra fazer funcionar, 
eu preciso tipo da rota (get) e o endereço, 
exemplo: anchieta.br/cursos-50-mais */

//req é a requisição (pergunta) e res, a resposta
app.get('/usuarios', (req, res) => {
   res.send('ok, deu bom')
})

app.listen(3000)