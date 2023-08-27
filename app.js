const questionsContainer = document.getElementById("app");
const popup = document.getElementById("popup");
const resultsContainer = document.getElementById("results");
const questions = [
  {
    question: "Chocolat ou Vanille ?",
    option1: "Chocolat",
    option2: "Vanille",
  },
  { question: "Montagne ou Plage ?", option1: "Montagne", option2: "Plage" },
  {
    question: "Thé ou Café ?",
    option1: "Thé",
    option2: "Café",
  },
  {
    question: "Plage ou Montagne ?",
    option1: "Plage",
    option2: "Montagne",
  },
  {
    question: "Chien ou Chat ?",
    option1: "Chien",
    option2: "Chat",
  },
  {
    question: "Livres ou Films ?",
    option1: "Livres",
    option2: "Films",
  },
  {
    question: "Été ou Hiver ?",
    option1: "Été",
    option2: "Hiver",
  },
  {
    question: "Ville ou Campagne ?",
    option1: "Ville",
    option2: "Campagne",
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
    question: "Marcher ou Courir ?",
    option1: "Marcher",
    option2: "Courir",
  },
  {
    question: "Natation ou Gymnastique ?",
    option1: "Natation",
    option2: "Gymnastique",
  },
  {
    question: "Musique ou Podcasts ?",
    option1: "Musique",
    option2: "Podcasts",
  },
  {
    question: "Voyage en train ou en avion ?",
    option1: "Train",
    option2: "Avion",
  },
  {
    question: "Dessiner ou Écrire ?",
    option1: "Dessiner",
    option2: "Écrire",
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
