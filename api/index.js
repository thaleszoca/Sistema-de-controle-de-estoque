(async () => {
    const db = require('./db')
    console.log('Selecionar todos os produtos')
    const products = await db.produtos()
    console.log(products)
})()