//criand a variavel do botao e adicionando um evento de click
let casdastrar = document.querySelector('#cadastrar')
casdastrar.addEventListener('click', cadastro)

//iniciando a função 
function cadastro () {
    //pegando as variaveis para usar com os valores 
    nomeProd = document.querySelector('#nome')
    codProd = document.querySelector('#codProd')
    colecaoNova = document.querySelector('#checkbox')
    corProd = document.querySelector('.check')
    categoria = document.querySelector('#categoria')
    tamanhoProd = document.querySelector('#tamanho')
    res = document.querySelector('#res')

    // //peguei o id de cada input radio, não sei se foi a melhor opção
    // preto = document.querySelector('#preto')
    // branco = document.querySelector('#branco')
    // vermelho = document.querySelector('#vermelho')
    // marrom = document.querySelector('#marrom')
    // cinza = document.querySelector('#cinza')
    // amarelo = document.querySelector('#amarelo')
    // laranja = document.querySelector('#laranja')

    // //pegando os valores dos inputs radio
    // valorPreto = preto.value
    // valorLaranja = laranja.value
    // valorVermelho = vermelho.value
    // valorMarrom = marrom.value
    // valorCinza = cinza.value
    // valorAmarelo = amarelo.value
    // valorLaranja = laranja.value
    
    // cores = [valorPreto, valorLaranja, valorVermelho, valorMarrom, valorCinza, valorAmarelo, valorLaranja]

    // Pega diretamente o valor do radio que o usuário marcou
    const corSelecionada = document.querySelector('input[name="opcao_cor"]:checked')?.value;


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

    //se nao preencher as informações necessárias
    if (nomeProd.value.length == 0 || codValor <= 0 || indice == "0") {
        window.alert('[ERRO] Preencha os campos necessários')
    }

    else {
        res.innerHTML = 
        `NOME DO PRODUTO: ${nomeValor} <br> 
        CATEGORIA DO PRODUTO: ${valor} <br> 
        NÚMERO: ${valorTamanho} <br> 
        CÓDIGO DO PRODUTO: ${codValor} <br> 
        COR DO PRODUTO: ${corSelecionada}` 
    }

}


    