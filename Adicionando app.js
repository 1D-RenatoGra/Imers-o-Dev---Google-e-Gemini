function pesquisar() {
    const campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
    const resultados = document.getElementById("resultados-pesquisa");
  
    // Limpa os resultados anteriores antes de realizar uma nova pesquisa
    resultados.innerHTML = '';
  
    // Verifica se o campo de pesquisa está vazio
    if (!campoPesquisa) {
      resultados.innerHTML = "<p>Digite o nome de um mob ou criatura para pesquisar.</p>";
      return;
    }
  
    // Itera sobre os dados e filtra os resultados
    let resultadoHTML = '';
    for (const mob in dados) {
      const { titulo, descricao, link, tags } = dados[mob];
      const textoParaPesquisar = `${titulo.toLowerCase()} ${descricao.toLowerCase()} ${tags.toLowerCase()}`;
  
      if (textoParaPesquisar.includes(campoPesquisa)) {
        resultadoHTML += `
          <div class="item-resultado">
            <h2><a href="${link}" target="_blank">${titulo}</a></h2>
            <p class="descricao-meta">${descricao}</p>
          </div>
        `;
      }
    }
  
    // Exibe os resultados ou uma mensagem de "não encontrado"
    resultados.innerHTML = resultadoHTML || "<p>Nenhum resultado encontrado para sua pesquisa.</p>";
  }
  
  // Chama a função pesquisar() com um valor vazio para exibir todos os mobs inicialmente
  pesquisar();
