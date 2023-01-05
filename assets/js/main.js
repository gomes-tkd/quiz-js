import questions from "./perguntas.js";

const divPerguntas = document.querySelector(".perguntas");
const btnProx = document.querySelector(".btn-proximo");
const btnReiniciar = document.querySelector(".btn-resetar");
const indexPergunta = document.querySelector(".index");

let acertos = 0;
let indexAtual = 0;

function handleFinalizar() {
    indexAtual = 0;
}

function handleContabilizaResposta(resposta) {
    if (indexAtual < (questions.length - 1)) {
        if (resposta.correta === true) {
            acertos++;
        }
    } else {
        handleFinalizar();
    }
}

const handleShowPerguntas = () => {
    const pPergunta = document.createElement("p");
    const perguntaAtual = questions[indexAtual];

    pPergunta.innerHTML = perguntaAtual.pergunta;
    perguntaAtual.respostas.map(resposta => {
      const btnResposta = document.createElement("button");
      btnResposta.innerHTML = resposta.op;
      pPergunta.appendChild(btnResposta);
      handleContabilizaResposta(resposta);
    });
    divPerguntas.appendChild(pPergunta);
    handleIndexAtual();
}

function handleIndexAtual() {
    indexAtual += 1;
}

btnProx.addEventListener("click", handleShowPerguntas);



handleShowPerguntas();

