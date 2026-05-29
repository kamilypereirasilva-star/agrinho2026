const economyEl = document.getElementById("economy");
const environmentEl = document.getElementById("environment");
const foodEl = document.getElementById("food");
const energyEl = document.getElementById("energy");
const messageEl = document.getElementById("message");

const buttons = document.querySelectorAll(".action-btn");

let game = {
  economy: 50,
  environment: 50,
  food: 50,
  energy: 50
};

function updateUI(){
  economyEl.textContent = game.economy;
  environmentEl.textContent = game.environment;
  foodEl.textContent = game.food;
  energyEl.textContent = game.energy;
}

function limitStats(){
  game.economy = Math.max(0, Math.min(100, game.economy));
  game.environment = Math.max(0, Math.min(100, game.environment));
  game.food = Math.max(0, Math.min(100, game.food));
  game.energy = Math.max(0, Math.min(100, game.energy));
}

buttons.forEach(button => {

  button.addEventListener("click", () => {

    const action = button.dataset.action;

    switch(action){

      case "solar":
        game.energy += 20;
        game.environment += 10;
        game.economy += 5;

        messageEl.textContent =
        "A energia solar fortaleceu o campo com tecnologia limpa e sustentável.";
      break;

      case "forest":
        game.environment += 20;
        game.food += 5;

        messageEl.textContent =
        "As florestas preservadas protegeram os rios, o clima e a biodiversidade.";
      break;

      case "technology":
        game.food += 20;
        game.economy += 15;
        game.energy += 5;

        messageEl.textContent =
        "A inovação agrícola aumentou a produtividade com eficiência tecnológica.";
      break;

      case "water":
        game.environment += 15;
        game.food += 10;

        messageEl.textContent =
        "A recuperação das nascentes garantiu água limpa e produção sustentável.";
      break;

      case "export":
        game.economy += 20;
        game.food += 5;
        game.environment -= 5;

        messageEl.textContent =
        "As exportações cresceram e fortaleceram a economia do agronegócio.";
      break;

      case "education":
        game.economy += 10;
        game.environment += 10;
        game.food += 10;

        messageEl.textContent =
        "Produtores capacitados utilizam técnicas modernas e sustentáveis.";
      break;
    }

    limitStats();
    updateUI();

    checkVictory();
  });

});

function checkVictory(){

  if(
    game.economy >= 90 &&
    game.environment >= 90 &&
    game.food >= 90 &&
    game.energy >= 90
  ){

    messageEl.innerHTML =
    "🏆 Parabéns! Você criou um modelo de agronegócio moderno, sustentável e essencial para o futuro da humanidade.";

    confettiEffect();
  }

  if(game.environment <= 15){

    messageEl.innerHTML =
    "⚠️ O meio ambiente está em risco. Produzir sem sustentabilidade compromete o futuro.";
  }

}

function confettiEffect(){

  document.body.style.boxShadow =
  "inset 0 0 120px rgba(31,184,106,0.5)";

}

document.getElementById("startBtn").addEventListener("click", () => {

  window.scrollTo({
    top: 650,
    behavior: "smooth"
  });

});

updateUI();