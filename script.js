const economia = document.getElementById("economia");
const meioAmbiente = document.getElementById("meioAmbiente");
const producao = document.getElementById("producao");
const energia = document.getElementById("energia");

const textoMensagem = document.getElementById("textoMensagem");

const botoes = document.querySelectorAll(".acao-btn");

let jogo = {
  economia: 50,
  meioAmbiente: 50,
  producao: 50,
  energia: 50
};

function atualizarTela(){

  economia.textContent = jogo.economia;
  meioAmbiente.textContent = jogo.meioAmbiente;
  producao.textContent = jogo.producao;
  energia.textContent = jogo.energia;

}

function limitarValores(){

  jogo.economia =
  Math.max(0, Math.min(100, jogo.economia));

  jogo.meioAmbiente =
  Math.max(0, Math.min(100, jogo.meioAmbiente));

  jogo.producao =
  Math.max(0, Math.min(100, jogo.producao));

  jogo.energia =
  Math.max(0, Math.min(100, jogo.energia));

}

botoes.forEach(botao => {

  botao.addEventListener("click", () => {

    const acao = botao.dataset.action;

    switch(acao){

      case "solar":

        jogo.energia += 20;
        jogo.meioAmbiente += 10;
        jogo.economia += 5;

        textoMensagem.textContent =
        "A energia solar reduziu impactos ambientais e modernizou o campo.";

      break;

      case "floresta":

        jogo.meioAmbiente += 20;
        jogo.producao += 5;

        textoMensagem.textContent =
        "A preservação das florestas protegeu rios, fauna e biodiversidade.";

      break;

      case "tecnologia":

        jogo.producao += 20;
        jogo.economia += 15;
        jogo.energia += 5;

        textoMensagem.textContent =
        "Tecnologia agrícola aumentou produtividade e eficiência.";

      break;

      case "rios":

        jogo.meioAmbiente += 15;
        jogo.producao += 10;

        textoMensagem.textContent =
        "Os rios recuperados garantem água limpa e agricultura sustentável.";

      break;

      case "exportacao":

        jogo.economia += 20;
        jogo.producao += 5;
        jogo.meioAmbiente -= 5;

        textoMensagem.textContent =
        "As exportações fortaleceram o agronegócio e movimentaram a economia.";

      break;

      case "educacao":

        jogo.economia += 10;
        jogo.meioAmbiente += 10;
        jogo.producao += 10;

        textoMensagem.textContent =
        "Produtores capacitados utilizam técnicas modernas e sustentáveis.";

      break;

    }

    limitarValores();

    atualizarTela();

    verificarVitoria();

  });

});

function verificarVitoria(){

  if(
    jogo.economia >= 90 &&
    jogo.meioAmbiente >= 90 &&
    jogo.producao >= 90 &&
    jogo.energia >= 90
  ){

    textoMensagem.innerHTML =
    "🏆 Você construiu um agro moderno, tecnológico e sustentável!";

    document.body.style.boxShadow =
    "inset 0 0 120px rgba(34,197,94,0.5)";
  }

  if(jogo.meioAmbiente <= 15){

    textoMensagem.innerHTML =
    "⚠️ O meio ambiente está em risco. Equilibre produção e preservação.";
  }

}

document
.getElementById("startBtn")
.addEventListener("click", () => {

  window.scrollTo({
    top:650,
    behavior:"smooth"
  });

});

atualizarTela();