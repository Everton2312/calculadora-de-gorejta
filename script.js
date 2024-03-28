let conta = 0
let pessoas = 0
let porcentagem = 0

const containput = document.querySelector("#conta")
containput.addEventListener("input", recebervalorconta )

function recebervalorconta(evento) {
    conta = number("evento.target.value")

    console.log(conta)
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
    pessoas = Number(evento.target.value)
  }
}

const botoesGorjeta = document.querySelectorAll (".gorjet input [type='number']")
botoesGorjeta.forEach(botao => {
     botao.addEventListener("click", receberPorcentagem)
})

function receberPorcentagem(evento) {
    console.log(evento.target.value)
}