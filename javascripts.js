let papagaios = ["bobrossparrot", "explodyparrot", "fiestaparrot", "metalparrot", "revertitparrot", "tripletsparrot", "unicornparrot"];

let quantidadeCartas = Number(prompt("Escolha um número par de cartas que deseja começar! (entre 4 a 14)"));


while(quantidadeCartas % 2 !== 0 || quantidadeCartas > 14 || quantidadeCartas < 4) {
    quantidadeCartas = Number(prompt("Escolha um número par de cartas que deseja começar! (entre 4 a 14)"))
}

let baralho = []
primeiraJogada = null;
segundaJogada = null;
quantidadesDeJogadas = 0;

cartasAleatorias();
aparecerCartas();

/*-----------------------Funções----------------------*/

function cartasAleatorias() {
 for(let i = 0; i < quantidadeCartas/2; i++){
     let carta = criarCarta(i);
     baralho.push(carta);
     baralho.push(carta);
 }

 baralho.sort(comparador);
}

function comparador() {
    return Math.random() - 0.5;
}


function criarCarta(indiceCarta) {
  let papagaio = papagaios[indiceCarta]
    return `
<div class="cartas" onclick="selecionarCarta(this)">
       <div class="carta-atras">
           <img src="./front.png" width="100px" height="100px" alt="papagaio">
       </div>
       <div class="carta-frente">
           <img src="${papagaio}.gif" width="100px" height="100px" alt="${papagaio}">
       </div>
        </div>
`
}

function aparecerCartas() {
    let tudao = document.querySelector(".tudao")
    for(let i = 0; i < baralho.length; i++) {
        let carta = baralho[i]
        tudao.innerHTML += carta;
    }
}

function selecionarCarta(div) {
div.classList.add("selecionado");
if(primeiraJogada === null) {
    primeiraJogada = div;
} else {
    segundaJogada = div;
    igualdadeCartas();
    quantidadesDeJogadas += 1;
}

}

function igualdadeCartas() {
if(primeiraJogada.innerHTML === segundaJogada.innerHTML) {
    primeiraJogada.classList.add("finalizado");
    segundaJogada.classList.add("finalizado");
    primeiraJogada = null;
    segundaJogada = null;
    setTimeout(fimDeJogo, 500);
} else {
    setTimeout(desvirarCartas , 1000);
}
}

function desvirarCartas() {
    primeiraJogada.classList.remove("selecionado");
    segundaJogada.classList.remove("selecionado");
    primeiraJogada = null;
    segundaJogada = null;
}

function fimDeJogo() {
let cartasComPar = document.querySelectorAll(".finalizado")
if(cartasComPar.length === quantidadeCartas) {
    alert(`Você ganhou em ${quantidadesDeJogadas} jogadas`)
}
}