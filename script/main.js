// ===============================
// Música de fundo
// ===============================
function tocarMusica() {
  const audio = document.getElementById("bg-musica");
  const btn = document.getElementById("botao-musica");

  if (audio.paused) {
    audio.volume = 0.04;
    audio.play()
      .then(() => {
        btn.textContent = "Pausar Música";
      })
      .catch((err) => {
        console.error("Erro ao tocar a música:", err);
      });
  } else {
    audio.pause();
    btn.textContent = "Tocar Música";
  }
}

// ===============================
// Navegação
// ===============================
function irParaOutraPagina() {
  window.location.href = "pagina02.html";
}

// ===============================
// Dados das Perguntas
// ===============================
const perguntas = [
  {
    pergunta: "Qual das seguintes inferências representa corretamente o Modus Tollens?",
    opcoes: [
      "A: Se p → q é verdadeiro e p é verdadeiro, então q é verdadeiro.",
      "B: Se p ∧ q é verdadeiro, então p e q são verdadeiros individualmente.",
      "C: Se p → q é verdadeiro e ¬q é verdadeiro, então ¬p é verdadeiro.",
      "D: Se p → q e q → r são verdadeiros, então p → r é verdadeiro.",
    ],
    respostaCorreta: 2,
  },
  {
    pergunta: "Qual das fórmulas abaixo representa uma contradição (insatisfatível)?",
    opcoes: ["A: ¬p ∧ p", "B: p ∨ ¬p", "C: p ∧ q", "D: (p → q) ∧ p"],
    respostaCorreta: 0,
  },
  {
    pergunta: "Qual das alternativas abaixo é uma tautologia (sempre verdadeira)?",
    opcoes: ["A: p ∧ ¬p", "B: p → p", "C: p ∨ ¬p", "D: p → ¬p"],
    respostaCorreta: 1,
  },
  {
    pergunta: "Qual é a aplicação correta da Lei de De Morgan para ¬(p ∨ (q ∧ r))?",
    opcoes: [
      "A: ¬p ∧ (¬q ∨ ¬r)",
      "B: ¬p ∨ ¬q ∧ r",
      "C: ¬p ∧ (¬q ∨ r)",
      "D: ¬p ∧ (¬q ∨ ¬r)",
    ],
    respostaCorreta: 3,
  },
  {
    pergunta: "Qual apresenta uma equivalência lógica correta com quantificadores?",
    opcoes: [
      "A: ∀x (P(x) ∨ Q(x)) ≡ ∀x P(x) ∨ ∀x Q(x)",
      "B: ∃x (P(x) → Q(x)) ≡ ∀x P(x) → ∃x Q(x)",
      "C: ∀x ∃y P(x, y) ≡ ∃y ∀x P(x, y)",
      "D: ∀x ∃y (P(x) ∧ Q(y)) ≡ ∃y ∀x (P(x) ∧ Q(y))",
    ],
    respostaCorreta: 3,
  },
  {
    pergunta: "O que é uma relação reflexiva?",
    opcoes: [
      "a) Quando, para todo a ∈ A, o par (a,b) pertence à relação.",
      "b) Quando, para todo a ∈ A, o par (a,a) pertence à relação.",
      "c) Quando, para todo a ∈ A, o par (b,a) pertence à relação.",
      "d) Quando, para todo a ∈ A, não existe nenhum par (a,a) na relação.",
    ],
    respostaCorreta: 1,
  },
  {
    pergunta: "Qual é a definição de 'Domínio de uma Relação'?",
    opcoes: [
      "a) Conjunto de todos os elementos de B que formam pares com elementos de A na relação.",
      "b) Conjunto de todos os elementos de A que formam pares com elementos de B na relação.",
      "c) Conjunto de todos os elementos de A que não formam pares com elementos de B na relação.",
      "d) Conjunto de todos os elementos de A e B que não formam pares na relação.",
    ],
    respostaCorreta: 1,
  },
  {
    pergunta: "Qual das propriedades abaixo é característica de uma relação simétrica?",
    opcoes: [
      "a) Se (a,b) ∈ R, então (b,a) ∉ R.",
      "b) Se (a,b) ∈ R, então (b,a) ∈ R.",
      "c) Se (a,b) ∈ R, então (a,a) ∈ R.",
      "d) Se (a,b) ∈ R, então (a,b) ∈ R e (b,a) ∈ R.",
    ],
    respostaCorreta: 1,
  },
  {
    pergunta: "O que caracteriza uma relação anti-simétrica?",
    opcoes: [
      "a) Para todo (a,b) ∈ R e (b,a) ∈ R, temos que a = b.",
      "b) Para todo (a,b) ∈ R, temos que b = a.",
      "c) Para todo (a,b) ∈ R e (b,a) ∈ R, temos que a ≠ b.",
      "d) Para todo (a,b) ∈ R, não existe o par (b,a) na relação.",
    ],
    respostaCorreta: 0,
  },
  {
    pergunta: "Qual é a operação que realiza a união entre duas relações R e S?",
    opcoes: [
      "a) R ∪ S = {(a,b) | (a,b) ∈ R ou (a,b) ∈ S}",
      "b) R ∩ S = {(a,b) | (a,b) ∈ R e (a,b) ∈ S}",
      "c) R - S = {(a,b) | (a,b) ∈ R e (a,b) ∉ S}",
      "d) ¬R = {(a,b) | (a,b) ∉ R}",
    ],
    respostaCorreta: 0,
  },
  {
    pergunta: "Qual é a união dos conjuntos A = {1, 2, 3} e B = {3, 4, 5}?",
    opcoes: ["A: {1, 2, 3, 4, 5}", "B: {1, 2, 4, 5}", "C: {1, 2, 3}", "D: {2, 3, 4, 5}"],
    respostaCorreta: 0,
  },
  {
    pergunta: "Qual é a interseção dos conjuntos A = {1, 2, 3} e B = {2, 3, 4}?",
    opcoes: ["A: {1, 2}", "B: {2, 3}", "C: {1, 3}", "D: {3, 4}"],
    respostaCorreta: 1,
  },
  {
    pergunta: "Qual é a diferença entre os conjuntos A = {1, 2, 3} e B = {2, 3, 4}?",
    opcoes: ["A: {1}", "B: {2, 3}", "C: {2}", "D: {3}"],
    respostaCorreta: 0,
  },
  {
    pergunta: "Qual é a diferença simétrica entre os conjuntos A = {1, 2, 3} e B = {3, 4, 5}?",
    opcoes: ["A: {1, 2, 3}", "B: {1, 2, 4, 5}", "C: {2, 4}", "D: {1, 3, 4, 5}"],
    respostaCorreta: 1,
  },
  {
    pergunta: "Qual é o produto cartesiano entre os conjuntos A = {1, 2} e B = {a, b}?",
    opcoes: [
      "A: {(1, a), (2, a), (1, b), (2, b)}",
      "B: {(1, a), (1, b), (2, a), (2, b)}",
      "C: {(a, 1), (b, 1), (a, 2), (b, 2)}",
      "D: {(1, 1), (2, 2), (a, a), (b, b)}",
    ],
    respostaCorreta: 0,
  },
];

// ===============================
// Variáveis do jogo
// ===============================
const containerPerguntas = document.querySelector(".perguntas");
let perguntaIndiceAtual = 0;
let pontos = 0;
let erros = 0;
let dicasRestantes = 3;

// ===============================
// Exibe pergunta atual
// ===============================
function exibirPergunta(index) {
  const pergunta = perguntas[index];
  containerPerguntas.innerHTML = "";

  const divPergunta = document.createElement("div");
  divPergunta.classList.add("pergunta");

  const perguntaTexto = document.createElement("p");
  perguntaTexto.textContent = pergunta.pergunta;
  divPergunta.appendChild(perguntaTexto);

  const divRespostas = document.createElement("div");
  divRespostas.classList.add("respostas");
  divRespostas.style.cssText = `
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 70%;
  `;

  pergunta.opcoes.forEach((opcao, i) => {
    const botao = document.createElement("button");
    botao.classList.add("resposta");
    botao.textContent = opcao;
    botao.style.textAlign = "left";
    botao.dataset.index = i;
    botao.addEventListener("click", () => verificarResposta(i, pergunta.respostaCorreta));
    divRespostas.appendChild(botao);
  });

  divPergunta.appendChild(divRespostas);
  containerPerguntas.appendChild(divPergunta);
}

// ===============================
// Verifica resposta
// ===============================
function verificarResposta(escolhida, correta) {
  if (escolhida === correta) {
    alert("Resposta correta!");
    pontos++;
    atualizarPlacar();

    if (pontos === perguntas.length) {
      alert(`Você completou o quiz!\nPontuação final: ${pontos} de ${perguntas.length}`);
      desativarBotoes();
    } else {
      perguntaIndiceAtual++;
      exibirPergunta(perguntaIndiceAtual);
    }
  } else {
    alert("Resposta incorreta! Tente novamente.");
    erros++;
    atualizarPlacar();
  }
}

// ===============================
// Atualiza placar
// ===============================
function atualizarPlacar() {
  document.getElementById("pontos").textContent = `Pontos: ${pontos}`;
  document.getElementById("erros").textContent = `Erros: ${erros}`;
}

// ===============================
// Desativa botões de resposta
// ===============================
function desativarBotoes() {
  document.querySelectorAll(".resposta").forEach((btn) => {
    btn.disabled = true;
  });
}

// ===============================
// Função de Dica
// ===============================
function usarDica() {
  if (dicasRestantes <= 0) return;

  const botoes = Array.from(document.querySelectorAll(".resposta"));
  const perguntaAtual = perguntas[perguntaIndiceAtual];

  const incorretas = botoes.filter(
    (btn) => parseInt(btn.dataset.index) !== perguntaAtual.respostaCorreta && !btn.disabled
  );

  // Remove (esconde) até 2 incorretas
  for (let i = 0; i < 2 && incorretas.length > 0; i++) {
    const randIndex = Math.floor(Math.random() * incorretas.length);
    const btn = incorretas.splice(randIndex, 1)[0];
    btn.style.display = "none";
  }

  dicasRestantes--;
  const btnDica = document.getElementById("btnDica");
  btnDica.textContent = `Usar Dica (${dicasRestantes} restante${dicasRestantes !== 1 ? 's' : ''})`;

  if (dicasRestantes === 0) {
    btnDica.disabled = true;
  }
}

// ===============================
// Inicialização
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  exibirPergunta(perguntaIndiceAtual);
  document.getElementById("botao-musica").addEventListener("click", tocarMusica);
  document.getElementById("btnDica").addEventListener("click", usarDica);
});
