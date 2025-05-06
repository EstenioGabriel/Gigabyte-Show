// ===============================
// Música de fundo
// ===============================
function tocarMusica() {
  const audio = document.getElementById("bg-musica");
  const audio2 = document.getElementById("bg-musica2");
  const btn = document.getElementById("botao-musica");
  const btn2 = document.getElementById("botao-musica2");

  if (audio.paused) {
    audio.volume = 0.50;
    audio.play()
    btn.textContent = "Pausar Música";
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
function voltar() {
  window.location.href = "index.html";
}

// ===============================
// Dados das Perguntas
// ===============================
const perguntas = [
  {
    pergunta: "Qual é a definição de conjunto?",
    opcoes: [
      "A: Uma coleção bem definida de objetos distintos.",
      "B: Um agrupamento desorganizado de objetos numéricos.",
      "C: Uma coleção de elementos ordenados e repetidos.",
      "D: Um grupo de números sempre em ordem crescente.",
    ],
    respostaCorreta: 0,
  },
  {
    pergunta:
      "Qual é o complemento do conjunto A = {1, 2} no universo U = {1, 2, 3, 4}?",
    opcoes: ["A: {1, 2}", "B: {3, 4}", "C: {1, 2, 3, 4}", "D: {2, 3}"],
    respostaCorreta: 1,
  },
  {
    pergunta:
      "Qual das alternativas representa corretamente a definição de subconjunto?",
    opcoes: [
      "A: Todo conjunto que contém exatamente os mesmos elementos de outro conjunto.",
      "B: Um conjunto que possui elementos que não existem em nenhum outro.",
      "C: Um conjunto que é sempre igual ao conjunto universal.",
      "D: Um conjunto onde todos os seus elementos pertencem a outro conjunto.",
    ],
    respostaCorreta: 3,
  },
  {
    pergunta: "A união dos conjuntos A = {1, 3} e B = {2, 3, 4} resulta em:",
    opcoes: ["A: {3}", "B: {2, 4}", "C: {1, 3}", "D: {1, 2, 3, 4}"],
    respostaCorreta: 3,
  },
  {
    pergunta:
      "A interseção entre os conjuntos A = {1, 2, 5} e B = {2, 3, 4} é:",
    opcoes: ["A: {1, 2}", "B: {2}", "C: {2, 3, 5}", "D: {1, 3}"],
    respostaCorreta: 1,
  },
  {
    pergunta: "Quando uma relação é considerada **reflexiva**?",
    opcoes: [
      "A: Quando, para todo a ∈ A, (a,b) pertence à relação.",
      "B: Quando, para todo a ∈ A, (a,a) pertence à relação.",
      "C: Quando, para todo a ∈ A, (b,a) pertence à relação.",
      "D: Quando, para todo a ∈ A, não existe (a,a) na relação.",
    ],
    respostaCorreta: 1,
  },
  {
    pergunta: "Uma relação R é **simétrica** se:",
    opcoes: [
      "A: Se (a,b) ∈ R, então (b,a) ∈ R.",
      "B: Se (a,b) ∈ R, então (b,a) ∉ R.",
      "C: Se (a,a) ∈ R para todo a.",
      "D: Se (a,b) ∈ R implica que a = b.",
    ],
    respostaCorreta: 0,
  },
  {
    pergunta: "Quando uma relação é **transitiva**?",
    opcoes: [
      "A: Se (a,b) ∈ R, então (b,a) ∈ R.",
      "B: Se (a,b) ∈ R e (b,c) ∈ R, então (a,c) ∈ R.",
      "C: Se (a,a) ∈ R, então R é transitiva.",
      "D: Se (a,b) ∉ R, então (b,a) ∉ R.",
    ],
    respostaCorreta: 1,
  },
  {
    pergunta: "Uma relação é de **equivalência** quando é:",
    opcoes: [
      "A: Simétrica e reflexiva.",
      "B: Reflexiva e transitiva.",
      "C: Reflexiva, simétrica e transitiva.",
      "D: Antissimétrica e transitiva.",
    ],
    respostaCorreta: 2,
  },
  {
    pergunta: "Qual das relações abaixo NÃO é simétrica?",
    opcoes: [
      "A: R = {(1,2), (2,1)}",
      "B: R = {(a,b), (b,a)}",
      "C: R = {(1,2), (2,3)}",
      "D: R = {(1,1), (2,2), (3,3)}",
    ],
    respostaCorreta: 2,
  },
  {
    pergunta: "O que caracteriza uma função **injetora**?",
    opcoes: [
      "A: Cada elemento do contradomínio é imagem de pelo menos um elemento do domínio.",
      "B: Todos os elementos do domínio têm a mesma imagem.",
      "C: A função associa vários valores do contradomínio para um único do domínio.",
      "D: Dois elementos distintos do domínio nunca têm a mesma imagem.",
    ],
    respostaCorreta: 3,
  },
  {
    pergunta: "Uma função é **sobrejetora** quando:",
    opcoes: [
      "A: Cada elemento do domínio tem imagem única.",
      "B: Todo elemento do contradomínio é imagem de pelo menos um elemento do domínio.",
      "C: Nenhum elemento do contradomínio é atingido.",
      "D: Dois elementos do domínio têm sempre a mesma imagem.",
    ],
    respostaCorreta: 1,
  },
  {
    pergunta: "Quando uma função é **bijetora**?",
    opcoes: [
      "A: Quando ela é apenas injetora.",
      "B: Quando ela é apenas sobrejetora.",
      "C: Quando é simultaneamente injetora e sobrejetora.",
      "D: Quando nenhum elemento do contradomínio é atingido.",
    ],
    respostaCorreta: 2,
  },
  {
    pergunta: "A função **composta** f ∘ g é definida como:",
    opcoes: [
      "A: (f ∘ g)(x) = g(f(x))",
      "B: (f ∘ g)(x) = f(x) + g(x)",
      "C: (f ∘ g)(x) = f(x) − g(x)",
      "D: (f ∘ g)(x) = f(g(x))",
    ],
    respostaCorreta: 3,
  },
  {
    pergunta: "Sobre a **função inversa**, é correto afirmar que:",
    opcoes: [
      "A: Só existe se a função original for sobrejetora.",
      "B: A inversa é sempre igual à função composta.",
      "C: Só existe se a função original for bijetora.",
      "D: Toda função possui uma inversa.",
    ],
    respostaCorreta: 2,
  },
  {
    pergunta:
      "Qual é a **fórmula do termo geral** de uma **progressão aritmética (PA)**?",
    opcoes: [
      "A: aₙ = r + a₁ · n",
      "B: aₙ = a₁ + (n − 1) · r",
      "C: aₙ = a₁ / (n − 1)",
      "D: aₙ = a₁ · qⁿ⁻¹",
    ],
    respostaCorreta: 1,
  },
  {
    pergunta: "Em uma PA, o que representa a razão **r**?",
    opcoes: [
      "A: O termo central da sequência.",
      "B: A soma dos termos.",
      "C: O produto entre o primeiro e o segundo termos.",
      "D: A diferença entre dois termos consecutivos.",
    ],
    respostaCorreta: 3,
  },
  {
    pergunta:
      "Qual é a **fórmula do termo geral** de uma **progressão geométrica (PG)**?",
    opcoes: [
      "A: aₙ = a₁ + (n − 1) · r",
      "B: aₙ = a₁ − r · n",
      "C: aₙ = rⁿ + a₁",
      "D: aₙ = a₁ · rⁿ⁻¹",
    ],
    respostaCorreta: 3,
  },
  {
    pergunta: "Em uma PG, o que representa a razão **r**?",
    opcoes: [
      "A: A soma dos dois primeiros termos.",
      "B: A subtração entre dois termos consecutivos.",
      "C: A divisão entre dois termos consecutivos.",
      "D: O maior valor da sequência.",
    ],
    respostaCorreta: 2,
  },
  {
    pergunta:
      "Qual das sequências abaixo representa uma **progressão geométrica**?",
    opcoes: [
      "A: 7, 14, 21, 28, 35",
      "B: 5, 10, 20, 40, 80",
      "C: 2, 4, 6, 8, 10",
      "D: 1, 3, 5, 7, 9",
    ],
    respostaCorreta: 1,
  },
];


// ===============================
// Variáveis do jogo
// ===============================
const containerPerguntas = document.querySelector(".perguntas");
let perguntaIndiceAtual = 0;
let pontos = 0;
let erros = 0;
let dicasRestantes = 7;

// ===============================
// Exibe pergunta atual
// ===============================
function exibirPergunta(index) {
  if(dicasRestantes === 0) {
    btnDica.disabled = true;
  } else {
    btnDica.disabled = false;
  }
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
// Verifica se dois ou mais botões foram desabilitadaos
// ===============================
function verificarBotoesDesabilitados() {
  const botoes = document.querySelectorAll(".resposta");
  const desabilitados = Array.from(botoes).filter(btn => btn.disabled).length;

  if (desabilitados >= 2) {
    const btnDica = document.getElementById("btnDica");
    btnDica.disabled = true;
  }
}

// ===============================
// Verifica resposta
// ===============================
function verificarResposta(escolhida, correta) {
  const botoes = document.querySelectorAll(".resposta");

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

    // Desabilita apenas o botão da resposta errada clicada
    botoes[escolhida].disabled = true;
    verificarBotoesDesabilitados();
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
  for (let i = 0; i < 2 && incorretas.length > 1; i++) {
    const randIndex = Math.random() * incorretas.length;
    const btn = incorretas.splice(randIndex, 2)[0];
    btn.style.display = "none";
  }

  dicasRestantes--;
  const btnDica = document.getElementById("btnDica");
  btnDica.textContent = `Usar Dica (${dicasRestantes} restante${dicasRestantes !== 1 ? 's' : ''})`;

  if (dicasRestantes === 0) {
    btnDica.disabled = true;
  }
  btnDica.disabled = true;
}

// ===============================
// Inicialização
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  exibirPergunta(perguntaIndiceAtual);
});
