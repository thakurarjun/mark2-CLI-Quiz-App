const readlineSync = require("readline-sync");
const chalk = require("chalk");

var score = 0;
var highScore = {
  name: "Jiten",
  score: 10,
};

var name = readlineSync.question("may I have your name please? ");
console.log(
  chalk.black.bgYellow(
    "Welcome " + name + " Now we are going to start your MARVEL quiz!"
  )
);
function yourQuestion(question, answer) {
  var yourAnswer = readlineSync.question(question);
  if (yourAnswer === answer) {
    console.log(
      chalk.green.bold(" Congtats you are level up....Going to next round ")
    );
    score = score + 1;
  } else {
    console.log(chalk.red.bold("I think you don't know about Marvel"));
    score = score - 1;
  }
  console.log(chalk.yellow(" you have got " + score + "points"));
}

var questions = [
  {
    question: chalk.whiteBright.underline.bgBlue(
      "During the early 90s, who tried to buy Marvel Comics: "
    ),
    answer: "michael-jackson",
  },
  {
    question: chalk.whiteBright.underline.bgBlue(
      " who is Marvel most popular characters: "
    ),
    answer: "Deadpool",
  },
  {
    question: chalk.whiteBright.underline.bgBlue(
      " In the Marvel Universe,who is the most advanced civilization on Earth.: "
    ),
    answer: "Wakanda",
  },
  {
    question: chalk.whiteBright.underline.bgBlue(
      " what is the meaning of J.A.R.V.I.S: "
    ),
    answer: "Just A Rather Very Intelligent System",
  },
  {
    question: chalk.whiteBright.underline.bgBlue(
      " who is the Pakistani teenager who becomes Ms Marvel: "
    ),
    answer: "Kamala Khan",
  },
  {
    question: chalk.whiteBright.underline.bgBlue(
      "who was the first Marvel hero: "
    ),
    answer: "captain america",
  },
  {
    question: chalk.whiteBright.underline.bgBlue(
      " Which Marvel character is kid friendly?: "
    ),
    answer: "spider-man",
  },
  {
    question: chalk.whiteBright.underline.bgBlue(
      " Who is greatest superhero of all time?: "
    ),
    answer: "bat-man",
  },
  {
    question: chalk.whiteBright.underline.bgBlue(
      " Who is Batman's favorite superhero?: "
    ),
    answer: "super-man",
  },

  {
    question: chalk.whiteBright.underline.bgBlue(
      " Who would win Ironman vs Batman?: "
    ),
    answer: "bat-man",
  },
];
for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  yourQuestion(currentQuestion.question, currentQuestion.answer);
}
function endGame() {
  if (score === questions.length) {
    console.log(chalk.green.bold("you have got highest score " + score + "points"));
  } else {
    console.log(chalk.red.bold("Google ...some facts about Marvell..."));
  }
}
endGame();
function marvelUser() {
  if (score >= highScore.score) {
    console.log(chalk.blue.bold(
      "Congrats you have beaten high score.Now send me your screenshot. "
    ));
  } else {
    console.log(chalk.red.bold("Great job ...but you are some points behind"));
  }
  console.log(chalk.yellow("YOUR TOTAL SCORE IS: " + score));
}
marvelUser();
