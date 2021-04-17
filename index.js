var readlineSync = require('readline-sync');

var userName = readlineSync.question("What's your name? ");

console.log("Welcome " + userName + " to Big Bang Theory Quiz");

score = 0;


function play(question, answer){
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log("right answer!!!");
    score += 1;
  }
  else {
    console.log("wrong answer...")
  }

  console.log("your current score: ", score);
  console.log("-------------");
}


var questions = [{
  question: "Rajesh and Howard are best friends. agree or disagree ? ",
  answer: "agree"
},{
  question: "Who is Sheldon's room-mate ? ",
  answer: "leanord"
},{
  question: "Did Penny work as a waitress ? ",
  answer: "yes"
},{
  question: "Who among Sheldon, Leanord, Howard and Rajesh went to space ? ",
  answer: "howard"
}]



for (let i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log("your final score: ", score);