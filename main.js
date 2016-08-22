var choices = ["Rock","Paper","Scissors"];
var userScore = 0;
var computerScore = 0;

function generate(){
  return Math.floor(Math.random()* choices.length);
}

$(document).ready(function(){

  $(".button").on("click", function(){
    var userChoice = $(this).val();
    var computerChoice = choices[generate()];
    $(".computerChoice").text("The computer chose " + computerChoice + " and you chose " + userChoice);
    $(".output").text("The computer chose " + computerChoice);
    if(userChoice == computerChoice){
      $(".output").text("TIE!");
    }
    else if((userChoice == "Rock" && computerChoice == "Scissors") || (userChoice == "Paper" && computerChoice == "Rock") || (userChoice == "Scissors" && computerChoice == "Paper")){
      $(".output").text("You Win!");
      userScore += 1;
    }
    else {
      $(".output").text("You Lose!");
      computerScore += 1;
    }
    $(".userScore").text("Your Score: " + userScore);
    $(".computerScore").text("Computer Score: " + computerScore);
  });

});
