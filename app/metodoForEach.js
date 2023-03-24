    // Busca os elementos do HTML
    const elementoParaInserirLivros = document.getElementById
    ('livros')
    const elementoComValorTotalDeLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis')

      // Função pra exibir cada livro na tela
function exibirOsLivrosNaTela (listaDeLivros) {
    // Toda vez q clicamos em algum botão especifico, vai limpar
    // o resto, e vai aparecer somente os objetos do botão que clicamos
    elementoParaInserirLivros.innerHTML = ''

    // Método Array forEach
listaDeLivros.forEach(livro => {
    // Manipular e limpar o html
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = ''

    // let disponibilidade = verificarDisponibilidadeDoLivro(livro)
    // Isso se chama operador Ternario, reduz linhas de codigo de um if e else com function
    let disponibilidade = livro.quantidade > 0 ? 'livros__imagens' : 'livros__imagens indisponivel'

    elementoParaInserirLivros.innerHTML += `
    <div class="livro">
    <img class="${disponibilidade}" src="${livro.imagem}"
      alt="${livro.alt}" />
    <h2 class="livro__titulo">
      ${livro.titulo}
    </h2>
    <p class="livro__descricao">${livro.autor}</p>
    <p class="livro__preco" id="preco">${livro.preco.toFixed(2)}</p>
    <div class="tags">
      <span class="tag">${livro.categoria}</span>
    </div>
  </div>  
    `
})
}

  // Existe um melhor jeito de criar essa função, chamada operador Ternario

// function verificarDisponibilidadeDoLivro(livro) {
//   if (livro.quantidade > 0) {
//     return 'livro__imagens'
//   }else {
//     return 'livros__imagens indisponivel'
//   }
// }