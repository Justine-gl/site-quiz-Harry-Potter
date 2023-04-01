let welcomeScreen = document.querySelector("#welcomscreen");
let questionScreen = document.querySelector("#questionscreen");
let endScreen = document.querySelector("#resultscreen");
let endBtn = document.querySelector("#quiz__btn__end");

function Quiz() {
  this.questions = [];
  this.indexCurrentQuestion = 0;

  this.addQuestion = function (question) {
    this.questions.push(question);
  };

  this.showCurrentQuestion = function () {
    if (this.indexCurrentQuestion < this.questions.length) {
      this.questions[this.indexCurrentQuestion].getElement();
    } else {
      questionScreen.style.display = "none";
      endScreen.style.display = "block";

      let gryffondorHouse = document.querySelector("#gryffondor");
      gryffondorHouse.textContent = gryffondor;

      let serpentardHouse = document.querySelector("#serpentard");
      serpentardHouse.textContent = serpentard;

      let serdaigleHouse = document.querySelector("#serdaigle");
      serdaigleHouse.textContent = serdaigle;

      let poufsouffleHouse = document.querySelector("#poufsouffle");
      poufsouffleHouse.textContent = poufsouffle;

      setTimeout(() => {
        this.indexCurrentQuestion = 0;
        gryffondor = 0;
        serpentard = 0;
        serdaigle = 0;
        poufsouffle = 0;
      });
    }
  };
}

let gryffondor = 0;
let serpentard = 0;
let serdaigle = 0;
let poufsouffle = 0;

function Question(title, answers) {
  this.title = title;
  this.answers = answers;

  (this.getElement = function () {
    // nombre de question
    let questionNumber = document.createElement("h3");
    questionNumber.classList.add("quiz__subtitle");
    questionNumber.textContent =
      "Question " +
      (quiz.indexCurrentQuestion + 1) +
      "/" +
      quiz.questions.length;
    questionScreen.append(questionNumber);

    // titre des question
    let questionTitle = document.createElement("h2");
    questionTitle.textContent = this.title;
    questionScreen.append(questionTitle);

    // réponse possible
    let questionAnswers = document.createElement("ul");
    questionAnswers.classList.add("question__answers");
    this.answers.forEach((answer, index) => {
      let elAnswer = document.createElement("li");
      elAnswer.classList.add("answer");
      elAnswer.textContent = answer;
      questionAnswers.append(elAnswer);
      elAnswer.id = index;
      elAnswer.addEventListener("click", this.checkAnswer);
    });
    questionScreen.append(questionAnswers);
  }),
    (this.checkAnswer = (event) => {
      let answerSelected = event.target;
      if (answerSelected.id == 0) {
        gryffondor++;
      } else if (answerSelected.id == 1) {
        serpentard++;
      } else if (answerSelected.id == 2) {
        serdaigle++;
      } else if (answerSelected.id == 3) {
        poufsouffle++;
      }

      setTimeout(() => {
        questionScreen.textContent = "";
        quiz.indexCurrentQuestion++;
        quiz.showCurrentQuestion();
      });
    });
}
let quiz = new Quiz();

let question1 = new Question("Quel est ta femme préférée dans la saga ?", [
  "Hermione Granger",
  "Bellatrix Lestrange",
  "Luna lovegood",
  "Nymphadora Tonks",
]);
quiz.addQuestion(question1);

let question2 = new Question("Quel est ton homme préféré dans la saga ?", [
  "Harry Potter",
  "Drago Malefoy",
  "Cédric Diggory",
  "Ollivandre",
]);
quiz.addQuestion(question2);

let question3 = new Question("Quel est ton animal magique préféré ?", [
  "Hippogriffe",
  "Phénix",
  "Sombral",
  "Dragon",
]);
quiz.addQuestion(question3);

let question4 = new Question(
  "Dans le chemin de Traverse, quel magasin t'a le plus plu ?",
  [
    "Magasin d'accessoires de Quidditch",
    "Fleury et Bott",
    "Ollivander - Fabricants de baguettes magiques",
    "Weasley, Farces pour sorciers facétieux",
  ]
);
quiz.addQuestion(question4);

let question5 = new Question("Laquelle de ces quatre couleurs préfères-tu ?", [
  "Rouge",
  "verte",
  "Jaune",
  "bleu",
]);
quiz.addQuestion(question5);
// PASSER ECRANT D'APRES
fenetreSuivante = () => {
  welcomeScreen.style.display = "none";
  questionScreen.style.display = "block";
  quiz.showCurrentQuestion();
};
let welcomeBtn = document.querySelector("#quiz__btn");
welcomeBtn.addEventListener("click", fenetreSuivante);

// REVENIR AU DEBUT
recommancerQuiz = () => {
  endScreen.style.display = "none";
  welcomeScreen.style.display = "block";
  welcomeBtn.addEventListener("click", fenetreSuivante);
};
endBtn.addEventListener("click", recommancerQuiz);
