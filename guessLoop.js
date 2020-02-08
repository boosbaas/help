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


let theChosenNumber; // player's number 

//opening dialogue for game, tests to make sure number entered is betwwen 1 & 100. 
async function gameStart() {

    function computerNumber(min, max) {
        return (Math.floor(Math.random() * (max - min + 1)) + min);
    };
    let computersGuess = computerNumber(1, 100);
    console.log(computersGuess)//remove before final submit, just checking
    let theNumber = await ask('I\'m bored. Play the number game with me.\b Pleeeeeease.Just enter a number between 1 and 100, I\'ll close my eyes.\nType in your number: ');
    theNumber = parseInt(theNumber);
    console.log(theNumber) //remove before final submit, just checking
    while (theNumber !== computersGuess) {
        theNumber = await ask('Hey, no cheating. You wanna be here all day? Pick a number between 1 and 100: ');
        theNumber = parseInt(theNumber);
        console.log(theNumber)//remove before final submit, just checking
        if (theNumber < 100 && theNumber > 1) {
            console.log('Took you long enough. Let\'s get guessing');
            break;
        }
       
    }
    console.log(theNumber);//remove before final submit, just checking

    console.log('First guess. Is your number:  ' + computersGuess);
    theChosenNumber = theNumber;
    console.log(theChosenNumber)


    async function comparingNumbers() {
        let guessMax = 100;
        let guessMin = 1;
        let count = 0;
        //getting input from player about whether number is higher or lower
        let computerQuestion = await ask('Is ' + computersGuess + ' the number you chose? ')
        let computerQuestionHighLow = await ask('Is it higher? ')
        let humanAnswer2High = computerQuestionHighLow;
        console.log(humanAnswer2High)
        //remove before final submit, just checking

        while (computerNumber !== theNumber && count < 10) {
            computerNumber(guessMin, guessMax);
            count += 1;
            console.log(count)//remove before final submit, just checking
            console.log(computerQuestionHighLow);
            console.log('Hooray!!!!!!  I\'m such a smart computer!!!!! \(Now put some underpants on my head.\)')

            if (humanAnswer2High === 'n' || humanAnswer2High === 'no') {
                guessMax = computersGuess;
                return computerNumber(guessMin, guessMax)

            } else if (humanAnswer2High === 'y' || humanAnswer2High === 'yes') {
                guessMin = computersGuess;
                return computerNumber(guessMin, guessMax)

            }

            await ask(computerQuestion);

        }

        process.exit
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