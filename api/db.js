const conectar = async ()=> {
    //se conectou ao banco, retorne a conexão
    if(global.conexao && global.conexao.state != 'disconected')
        return global.conexao
    const mysql= require('mysql2/promise')
    //endereço do meu banco de dados
    const con=mysql.createConnection("mysql://root:root@localhost:3306/estoque")
    console.log('Conectou ao banco')
    global.conexao=con
    return con
}

module.exports = {conectar}

