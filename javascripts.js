let quantidadeCartas = Number(prompt("Escolha um número par de cartas que deseja começar! (entre 4 a 14)"))

while(quantidadeCartas % 2 !== 0 || quantidadeCartas > 14 || quantidadeCartas < 4) {
    quantidadeCartas = Number(prompt("Escolha um número par de cartas que deseja começar! (entre 4 a 14)"))
}
