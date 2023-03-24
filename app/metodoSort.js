let btnOrdenarPorPreco = document.getElementById("btnOrdenarPorPreco")
btnOrdenarPorPreco.addEventListener("click", ordenarLivrosPorPreco)

    // Ordena os livros do preço menor para o maior
function ordenarLivrosPorPreco () {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
    exibirOsLivrosNaTela(livrosOrdenados)
}
