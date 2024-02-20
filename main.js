// Lista de citações para o livro Épico
const citacoesEpico = [
  "“Sem a cultura, e a liberdade relativa que ela pressupõe, a sociedade, por mais perfeita que seja, não passa de uma selva. É por isso que toda a criação autêntica é um dom para o futuro.” — Albert Camus",
        "“Não há problema que a leitura não possa solucionar”. — Charles Bukowski",
        "“A leitura é o caminho mais curto para o conhecimento”. — Aristóteles",
        "blalblaba"
];

// Função para selecionar aleatoriamente uma citação
function selecionarCitacaoAleatoria(citacoes) {
  return citacoes[Math.floor(Math.random() * citacoes.length)];
}

// Exibir uma citação aleatória no carregamento da página para o livro Épico
document.getElementById("citacao_epico").textContent = selecionarCitacaoAleatoria(citacoesEpico);