//criand a variavel do botao e adicionando um evento de click
let casdastrar = document.querySelector('#cadastrar')
casdastrar.addEventListener('click', cadastro)

//iniciando a função 
function cadastro () {
    //pegando as variaveis para usar com os valores 
    nomeProd = document.querySelector('#nome').value
    codProd = document.querySelector('#codProd').value
    colecaoNova = document.querySelector('#checkbox').value
    corProd = document.querySelector('.check').value
    categoria = document.querySelector('#categoria').value
    tamanhoProd = document.querySelector('#tamanho').value
    res = document.querySelector('#res').value
    sucesso = document.querySelector('#sucesso').value
    preco = document.querySelector('#preco').value
    imagem = document.querySelector('#escolherImagem').value

   let produtos = [nomeProd, codProd, categoria, tamanhoProd, corProd, preco, colecaoNova, imagem]

   console.log(produtos, 1123213)

    // Pega diretamente o valor do radio que o usuário marcou (perguntei pra ia) o ?. pega o valor, e se o valor n existir, ele retorna undefined
    let corSelecionada = document.querySelector('input[name="opcao_cor"]:checked')?.value;
    console.log(corSelecionada)

    //pegando indice, valor e texto da CATEGORIA 
    let indice = categoria.selectedIndex
    let valor = categoria.value
    let text = categoria.options[indice].text

    //mostrando no console para teste
    console.log(indice)
    console.log(valor)
    console.log(text)
    
    //pegando indice, valor e texto do tamanho
    let indiceTamanho = tamanhoProd.selectedIndex
    let valorTamanho = tamanhoProd.value
    let textTamanho = tamanhoProd.options[indice].text

    //mostrando no console para teste
    console.log(indiceTamanho)
    console.log(valorTamanho)
    console.log(textTamanho)

    // tranformando as variaveis em valores
    codValor = Number(codProd.value)
    nomeValor = nomeProd.value
    tamanhoValor = Number(tamanhoProd.value)
    colecaoValor = colecaoNova.checked

    //se nao preencher as informações necessárias
    if (nomeProd.value.length == 0 || codValor <= 0 || indice == "0" || corSelecionada == undefined || preco.value.length == 0) {
        window.alert('[ERRO] Preencha os campos necessários')
    }

    else {
        res.innerHTML = 
        `NOME DO PRODUTO: ${nomeValor} <br> 
        CÓDIGO DO PRODUTO: ${codValor} <br> 
        CATEGORIA DO PRODUTO: ${valor} <br> 
        TAMANHO DO PRODUTO: ${tamanhoValor} <br>
        PRECO DO PRODUTO: ${preco.value}<br>
        COR DO PRODUTO: ${corSelecionada} <br>` 
        console.log(colecaoNova)

        if (colecaoNova.checked) {
            res.innerHTML += 'COLEÇÃO NOVA: O produto pertence à coleção nova.'
        } else {
            res.innerHTML += 'COLEÇÃO NOVA: O produto não pertence à coleção nova.'
        }

        sucesso.style.display = 'flex'
    }

}


    