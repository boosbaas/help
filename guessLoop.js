const readline = require('readline');
const readlineInterface = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
    return new Promise((resolve, reject) => {
        readlineInterface.question(questionText, resolve);
    });
}
//
// **********Game play starts below this coment*******************
//


let theNumber = 46; // player's number QUESTION: should it be a const or a let?


function computerNumber(min, max) { Math.floor(Math.random() * (max - min + 1)) + min }; //computer's guesses

//opening dialogue for game, tests to make sure number entered is betwwen 1 & 100. QUESTION: how do I only get whole numbers?
/*async function gameStart() {
    console.log('I\'m bored. Play the number game with me.');
    let opening = await ask('Pleeeeeease. Just enter a number, I\'ll close my eyes.');
        if (opening <= 100 && opening >= 1) {
        console.log('Oh goody! You chose ' + opening);
        theNumber = opening;
    } else {
        console.log('Hey, no cheating. Pick a number between 1 and 100');
    } 
}
gameStart();*/
function computerNumber(min, max) { Math.floor(Math.random() * (max - min + 1)) + min }; //computer's guesses
//******computer gets 10 chances to guess the number */
function gamePlay(theNumber) {
    console.log('First guess. is your number:  ' + computerNumber(1, 100));
    for (guessCount = 0; guessCount < 10; guessCount++) {
        if (computerNumber === theNumber) {
            console.log('You got it!');
        } else if (computerNumber > theNumber) {
            console.log('Too high.');
            let nextComputerNumber = computerNumber(1, computerNumber);
            computerNumber = nextComputerNumber;
            console.log(computerNumber)
        }
    }
}

gamePlay();
// this is actually for when the computer chooses the number and the player gets
/*while (guessCount < 8) {
    async function numberGuessed() {
        let numberGuessed = await ask('Guess a number between 1 and 100. ')
        if (numberGuessed > theNumber) {
            console.log('too high, try again')
        } else if (numberGuessed < theNumber) {
            console.log('too low, try again')
        }
        return numberGuessed;
    }
    guessCount++
}
numberGuessed()*/