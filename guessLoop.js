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


let theNumber; // player's number 

//opening dialogue for game, tests to make sure number entered is betwwen 1 & 100. 
async function gameStart() {
    let opening = await ask('I\'m bored. Play the number game with me.\b Pleeeeeease.Just enter a number, I\'ll close my eyes.\nType in your number: ');


    //opening = parseInt(opening);
    if (opening > 100 || opening < 1) {
        await ask('Hey, no cheating. Pick a number between 1 and 100: ');
        //break;
    } else{
        theNumber = opening;
        console.log('Finally. You chose ' + theNumber + ' Let\'s get guessing');
        //break;
    }




    //******computer gets 10 chances to guess the number */

    function computerNumber(min, max) {
        return (Math.floor(Math.random() * (max - min + 1)) + min);
    };
    let computersGuess = computerNumber(1, 100)

    async function comparingNumbers() {
        let guessMax = 100;
        let guessMin = 1;
        let count = 0;
        //human answer
        let humanAnswer2High = await ask('It\'s lower than ' + computersGuess);
        let humanAnswer2Low = await ask('It\'s higher than ' + computersGuess);
        let humanAnswerJustRight = await ask('Such a smart computer! you got it in ' + count)
        console.log('First guess. Is your number:  ' + computersGuess);

        while (computerNumber !== theNumber && count < 10) {
            computerNumber(guessMin, guessMax)
            count += 1;
            if (computerNumber > theNumber) {
                console.log(humanAnswer2High);
                guessMax = computersGuess;
                computersGuess = computerNumber(guessMin, guessMax);
                console.log('this is the computers guess ' + computersGuess);
                break;
            } else if (computerNumber < theNumber) {
                console.log(humanAnswer2Low);
                guessMin = computersGuess;
                computersGuess = computerNumber(guessMin, guessMax);
                console.log('this is the computers guess ' + computersGuess);
                break;
            } else {
                console.log(humanAnswerJustRight);
                break;
            }
        } process.exit
    }
    comparingNumbers();
    
}
gameStart();










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