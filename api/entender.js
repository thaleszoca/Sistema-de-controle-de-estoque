// //setTimeout é usado para indiciar em quanto tempo a função irá ser inicializada
// setTimeout(() => {
//     console.log('Olá, tudo bem')
// }, 1000) //tempo em milisegundos

// //o setInterval é usado para executar a função várias vezes dps de um tempo especificado
// let value = 10

// const interval = setInterval(() => {
//     console.log(value)
//     value--

//     if (value == 0) {
//         console.log('FELIZ ANO NOVO')
//         //interrompe o intervalo de execuções
//         clearInterval(interval)
//     }
// }, 1000)

// console.log('Executando função assincrona')
// function aprender () {
//     //uso do objeto nem Promise, que vai esperar pra retornar um valor
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//         let sucesso = true

//         if (sucesso) {
//             resolve('A operação foi concluida com sucesso')
//         }else {
//             reject('Algo deu errado')
//         }
//         }, 3000)
//     })
// }

// async function fetch () {
//     const response = await aprender()
//     console.log(response)
// }

// fetch()

// console.log(1)

// queueMicrotask(() => {
//     console.log(2)
// })

// setTimeout(() => {
//     console.log(3)
// }, 1000)

// console.log(4)

// Promise.resolve(true).then(() => {
//     console.log(5)
// // })

// async function chamarApi () {

//     try {
//         const response = await fetch ('https://algo.com.br')
//         console.log(`Sucesso: ${response}`)
//     } catch (error) {
//         console.log(`Erro: ${error}`)
//     } finally {
//         console.log('Continuando...')
//     }
    
// }

// chamarApi()

// // const chamarOutaApi = async () => {
// //     const dado = await fetch ('https://outrodado.com.br')
// // }




// //fazendo a mesma sintaxe sem olhar tchã

// async function chamaBD () {
//     try {
//         const banco = fetch ('http://localhost:3000/produtos')
//         console.log(`Sucesso: ${banco}`)
//     } catch(error) {
//         console.log(`Erro: ${error}`)
//     } finally () {
//         console.log('Cotninuando...')
//     }
// }