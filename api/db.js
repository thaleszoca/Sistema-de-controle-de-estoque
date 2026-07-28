const conectar = async ()=> {
    if(global.conexao && global.conexao.state != 'disconected')
        return global.conexao
    const mysql= require('mysql2/promise')
    const con=mysql.createConnection("mysql://root:root@localhost:3306/estoque")
    console.log('Conectou ao banco')
    global.conexao=con
    return con
}

const produtos = async() =>{
    const con=await conectar ()
    const [linhas] = await con.query('SELECT * FROM produtos')
    return await linhas
}

module.exports = {produtos}