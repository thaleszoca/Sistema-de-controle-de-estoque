const db = require('./db')

const produtos = async() =>{
    const con=await db.conectar()
    const [linhas] = await con.query('SELECT * FROM produtos')
    return await linhas
}

const insereProduto = async(produto) =>{
    const con=await db.conectar()
    const sql='INSERT INTO produtos (nome_produto, codigo_produto, categ_produto, tamanho_produto, cor_produto, preco_produto, quantidade, imagem, colecao_nova) VALUES (?,?,?,?,?,?,?,?,?)'
    //fiz um array das colunas da tabela produtos
    const valores=[produto.nome_produto, produto.codigo_produto, produto.categ_produto, produto.tamanho_produto, produto.cor_produto, produto.preco_produto, produto.quantidade, produto.imagem, produto.colecao_nova]
   await con.query(sql, valores)
}
