const questionsContainer = document.getElementById("app");
const popup = document.getElementById("popup");
const resultsContainer = document.getElementById("results");
const questions = [
  {
    question: "Séries TV ou films?",
    option1: "Séries TV",
    option2: "Films",
  },
  {
    question: "À emporter ou manger sur place?",
    option1: "À emporter",
    option2: "Manger sur place",
  },
  {
    question: "Temps chaud ou froid?",
    option1: "Chaud",
    option2: "Froid",
  },
  {
    question: "Douche ou bain?",
    option1: "Douche",
    option2: "Bain",
  },
  {
    question: "Appeler ou envoyer un SMS?",
    option1: "Appeler",
    option2: "SMS",
  },
  {
    question: "Glace au chocolat ou à la vanille?",
    option1: "Chocolat",
    option2: "Vanille",
  },
  {
    question: "Vivre en 1969 ou en 2069?",
    option1: "1969",
    option2: "2069",
  },
  {
    question: "Chute de neige la nuit ou pluie le matin?",
    option1: "Chute de neige la nuit",
    option2: "Pluie le matin",
  },
  {
    question: "Chien ou chat?",
    option1: "Chien",
    option2: "Chat",
  },
  {
    question: "Été ou hiver?",
    option1: "Été",
    option2: "Hiver",
  },
  {
    question: "Océan ou montagnes?",
    option1: "Océan",
    option2: "Montagnes",
  },
  {
    question: "Matin ou soir?",
    option1: "Matin",
    option2: "Soir",
  },
  {
    question: "Thé ou café?",
    option1: "Thé",
    option2: "Café",
  },
  {
    question: "Jouer dehors ou créer une forteresse de couvertures?",
    option1: "Jouer dehors",
    option2: "Forteresse de couvertures",
  },
  {
    question: "Côté gauche ou droit du lit?",
    option1: "Gauche",
    option2: "Droit",
  },
  {
    question: "Livres ou Films ?",
    option1: "Livres",
    option2: "Films",
  },
  {
    question: "Pizza ou Pasta ?",
    option1: "Pizza",
    option2: "Pasta",
  },
  {
    question: "Salé ou Sucré ?",
    option1: "Salé",
    option2: "Sucré",
  },
  {
    question: "Cuisine maison ou Restaurant ?",
    option1: "Cuisine maison",
    option2: "Restaurant",
  },
  {
    question: "Musique ou Podcasts ?",
    option1: "Musique",
    option2: "Podcasts",
  },
];
const answeredQuestionsIndices = [];
const userAnswers = [];
let currentQuestionIndex = null;

function loadRandomQuestion() {
  if (answeredQuestionsIndices.length === 20) {
    showResults();
    return;
  }
  const availableQuestionsIndices = questions
    .map((_, index) => index)
    .filter((index) => !answeredQuestionsIndices.includes(index));
  const randomIndex = Math.floor(
    Math.random() * availableQuestionsIndices.length
  );
  currentQuestionIndex = availableQuestionsIndices[randomIndex];
  renderQuestion(questions[currentQuestionIndex]);
}

function renderQuestion(question) {
  questionsContainer.innerHTML = `
  <div class="flex flex-col items-center w-full">
    <!-- Image centrée -->
    <img src="Fichier 2@4x.png" alt="Description of the image" class="mb-4 w-36"> 

  <div class="flex w-full">
    <div class="grid  flex-grow card rounded-box place-items-center">
        <button onclick="answerQuestion('${question.option1}')" class="btn btn-primary w-full h-full">${question.option1}</button>
    </div>
    <div class="divider divider-horizontal text-white">OU</div>
    
    <div class="grid  flex-grow card rounded-box place-items-center">
        <button onclick="answerQuestion('${question.option2}')" class="btn btn-accent w-full h-full">${question.option2}</button>
    </div>
</div>
</div>
    `;
}

function answerQuestion(answer) {
  answeredQuestionsIndices.push(currentQuestionIndex);
  userAnswers.push({
    question: questions[currentQuestionIndex].question,
    answer: answer,
  });
  loadRandomQuestion();
}

function showResults() {
  let resultsHTML = userAnswers
    .map(
      (answer) =>
        `<li>${answer.question} - <strong>${answer.answer}</strong></li>`
    )
    .join("");
  resultsContainer.innerHTML = resultsHTML;
  popup.classList.remove("hidden"); // Afficher le popup
}

function closePopup() {
  popup.classList.add("hidden");
  location.reload(); // Recharger la page pour recommencer le quiz
}

loadRandomQuestion();
