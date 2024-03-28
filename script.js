let conta = 0
let pessoas = 0
let porcentagem = 0

const containput = document.querySelector("#conta")
containput.addEventListener("input", recebervalorconta )

function recebervalorconta(evento) {
    conta = Number("evento.target.value")
    calcular()
}

const pessoasinput = document.querySelector("#pessoas")
pessoasinput.addEventListener("input", receberquantidadepessoas)

function receberquantidadepessoas(evento)  {
    const paragrafoErro = document.querySelector(".pessoas #erro") 
    const divErro = document.querySelector(".pessoas .input-box")
    
    
    if(evento.target.value === "0") {
   paragrafoErro.style.display = "block"
   divErro.setAttribute("id", "erro-div")
  } else {
    paragrafoErro.style.display = "none"
    divErro.setAttribute("id", "")
    pessoas = number(evento.target.value)
  }

   calcular()
}

const botoesGorjeta = document.querySelectorAll (".gorjeta input [type='button']")
botoesGorjeta.forEach(botao => {
     botao.addEventListener("click", receberPorcentagemBotao)
})

 function receberPorcentagemBotao(evento) {
    botoesGorjeta.forEach(botao => {
        botao.classList.remove("botao-ativo")
        
        
        if(botao.value === evento.target.value) {
            botao.classList.add("botao-ativo")
        }
    })

    if(evento.target.value !== "") {
        porcentagem = parseFloat(evento.trget.value) / 100
    } else {
        porcentagem = 0
    }   
    
    
    calcular()
}

const gorjetainput = document.querySelector("#outra")
gorjetainput.addEventListener("input", receberPorcentagem)

function calcular() {
    if(conta !== 0 && porcentagem !== 0 && pessoas !==0) {
        const strongGorjetatotal = document.querySelector(".gorjeta-total > strong")
        strongGorjetatotal.innerHTML = 'R$ ${(conta * porcentagem / pessoas).toFixed(2)}'

        const strongTotal = document.querySelector(".total > strong")
        strongTotal.innerHTML= 'R$ ${((conta + (conta * porcentagem)) / pessoas).toFixed(2)}'
    }
}

const botaoLimpar = document.querySelector(".resultados button")
botaoLimpar.addEventListener("click", limpar)

function limpar () {
    containput.value = ""

    botoesGorjeta.forEach(botao =>{
        botao.classList.remove("botao-ativo")
    })

    gorjetainput.value = ""

    pessoasinput.value = ""

    document.querySelector(".gorjeta-total > strong").innerHTML = "R$0.00"
    document.querySelector(".total > strong").innerHTML = "R$ 0.00"

    conta = 0
    porcentagem = 0
    pessoas = 0
}