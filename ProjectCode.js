/* Design a program for the Hollywood Movie Rating Guide, in which users continuously enter a value from 0 to 5 that indicates the number of
stars they are awarding to a movie title they are prompted for. The program executes continuously until a user decides to quit.
If a user enters a star value that does not fall in the correct range, re-prompt the user three (3) times until a correct value is entered.
At the end of the program, display the average star rating for the movie.
*/

"use strict";
const PROMPT = require('readline-sync');
let continueThing, rating, average, counter;
let ratingThing = 0;

function main() {
    setCounter();
    setContinueThing();
    while (continueThing === 1) {
        setNewRating();
        setContinueThing();
    }
    printExit();
}

main();

function setCounter() {
    counter = 0;
}

function setContinueThing() {
    if (continueThing === 1) {
        continueThing = Number(PROMPT.question('\n Do you want to continue? 0 for no, 1 for yes. '));
        while (continueThing !== 0 && continueThing !== 1) {
            console.log(continueThing + ' is not an acceptable answer. Do it right this time.');
            continueThing = Number(PROMPT.question('\n Do you want to continue? 0 for no, 1 for yes. '));
        }
    } else if (continueThing === 0) {
        printExit();
    }
    else {
        counter = counter++;
        continueThing = 1;
    }
}

function setNewRating() {
    rating = Number(PROMPT.question('\n What would you rate Definitely A Real Movie between 0 and 5 stars? '));
    while (rating !== 0 && rating !== 1 && rating !== 2 && rating !== 3 && rating !== 4 && rating !== 5) {
        console.log(rating + ' is not an acceptable rating.');
        rating = Number(PROMPT.question('\n What would you rate Definitely A Real Movie between 0 and 5 stars? '));
    }
    ratingThing = rating + ratingThing;
    counter = counter+1;
}

function printExit() {
    average = ratingThing / counter;
    console.log('\n The average rating is ' + average + '.');
    console.log('\n Goodbye.');
}