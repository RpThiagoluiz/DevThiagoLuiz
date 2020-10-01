let userScore = 0;
let pcScore = 0;

const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('pc-score');


const scoreBoard_div = document.querySelector('.score-container');
const result_p = document.querySelector('.result > p');

const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');



const getComputerChoice = () => {
   const choices = ['r', 'p', 's'];
   const randomNumber = Math.floor(Math.random() * 3); //o capeta do autocorretor sabia!
   return choices[randomNumber];
}


// fazer o r, virar rock...
//pegando o resultado, e transformando ele no que fica mais lindo de ser ve.

let convertWord = (letter) => {
   if (letter === 'r') return 'Pedra';
   if (letter === 'p') return 'Papel';
   return 'Tesoura';
}





//parametros para a function, lancar a braba na const game.
//GOD


const win = (playerC, compC) => {


   userScore++;
   userScore_span.innerHTML = userScore;
   result_p.innerHTML = `GANHOU!  ${convertWord(playerC)}  ganha de   ${convertWord(compC)} &#x2728 &#x1F389`;

}

const lose = (playerC, compC) => {
   pcScore++;
   computerScore_span.innerHTML = pcScore;
   result_p.innerHTML = `PERDEU! o computador escolheu  ${convertWord(compC)} &#x1F9B9`;


}

const draw = (playerC, compC) => {

   result_p.innerHTML = `EMPATE! Ambos escolheram ${convertWord(playerC,compC)} &#x1F31A`;

}





const game = (userChoice) => {
   const computerChoice = getComputerChoice();
   switch (userChoice + computerChoice) {
      case "pr":
      case "rs":
      case "sp":
         win(userChoice, computerChoice);
         break;

      case "rp":
      case "ps":
      case "sr":
         lose(userChoice, computerChoice);
         break;

      case "rr":
      case "pp":
      case "ss":
         draw(userChoice, computerChoice);
         break;
   }
}

//funcionou. o switch funcionou substituindo o if, que no caso seria muitos ifElse. eu passei os parametros,(argumentos) da escolha e as comparações entre eles
// determinando como seria o resultado, testei no console.log. addeventlist e substituir o testo do paragrafo.
//placar tbm tem q mudar... vmo ver o placar. win, lose draw function.

// a variavel main, chama a const game, para ser excecutada em rock, paper e scissor, ouvindo o evento de click do mouse.


const main = () => {

   rock_div.addEventListener('click', () => {
      game('r');
   })

   paper_div.addEventListener('click', () => {
      game('p');
   })

   scissors_div.addEventListener('click', () => {
      game('s');
   })
}

main();


//...switch, documentation. tipo if, else if,


//100%, tem como organizar melhor essa merda, tem muito codigo junto. class export. manja

//switch, limitar o score, resetar o game quando atingir o score maximo!, organizar o codigo. fazer cafe!