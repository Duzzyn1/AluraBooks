const botoes = document.querySelectorAll('.btn') 
botoes.forEach(btn => btn.addEventListener("click", filtrarLivros))

function filtrarLivros () {

    // Pega todos os elementos botões, o id btn
    const elementoBtn = document.getElementById(this.id)

    // Pega o valor que tá dentro do elemento, o id
    const categoria = elementoBtn.value

    // Essa váriavel vai ser baseada em uma condição, se a categoria for disponivel, pega a quantidade maior q zero,
    // e se não é disponivel, ela faz um filtro com base nessa categoria. É como se fosse um IF e um ELSE 

    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria)

    exibirOsLivrosNaTela(livrosFiltrados)
    if (categoria == 'disponivel') {
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados)
        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal)
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotalDosLivrosDisponiveisNaTela (valorTotal) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
}