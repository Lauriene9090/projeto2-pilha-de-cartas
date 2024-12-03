let baralho = []

while (true) {
    let menu = `Baralho de cartas:
Quantidade de cartas: ${baralho.length}
Escolha uma opção:
1. Adicionar uma carta
2. Puxar uma carta
3. Sair`

    let escolha = prompt(menu)

    if (escolha === "1") {
        let nomeCarta = prompt("Digite o nome da carta:")

        if (nomeCarta && nomeCarta.trim() !== "") {
            baralho.push(nomeCarta)
            alert(`${nomeCarta} foi adicionada ao topo do baralho.`)
        } else {
            alert("Nome da carta inválido! Tente novamente.")
        }
    } else if (escolha === "2") {
        if (baralho.length === 0) {
            alert("O baralho está vazio.")
        } else {
            let cartaPuxada = baralho.pop()
            alert(`Você puxou a carta: ${cartaPuxada}`)
        }
    } else if (escolha === "3") {
        alert("Encerrando programa. Até mais!")
        break
    } else {
        alert("Opção inválida! Tente novamente.")
    }
}
