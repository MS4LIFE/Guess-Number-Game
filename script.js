'use strict';

// console.log(document.querySelector(".message").textContent = "Correct Number !");

// document.getElementsByClassName("check")[0].addEventListener("click", function () {

// })

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = Number(document.querySelector('.score').textContent);
let message = document.querySelector('.message');
let body = document.body.style;
let number = document.querySelector('.number');
let highScore = Number(document.querySelector('.highscore').textContent);

document.querySelector('.check').addEventListener('click', function () {
    let guess = Number(document.querySelector('.guess').value);
    console.log(secretNumber);
    if (!guess) {
        guess === null;
        message.textContent = 'Please Enter A Valid Number!';
    } else if (guess === secretNumber) {
        message.textContent = 'Correct!';
        number.textContent = secretNumber;
        number.style.width = '30rem';
        body.backgroundColor = 'green';
        console.log(highScore);

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = score;
            console.log(highScore);
        } else {
            score = document.querySelector('.highscore').textContent;
        }
    }
    else if (guess !== secretNumber) {
        if (score > 1) {
            message.textContent = guess > secretNumber ? 'Too High!' : 'Too Low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            message.textContent = 'You Lost!';
            document.querySelector('.score').textContent = 0;
            body.backgroundColor = 'darkRed';
        }
    }

    // else if (guess > secretNumber) {
    //     if (score > 1) {
    //         message.textContent = 'Too High!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         message.textContent = 'You Lost!';
    //         document.querySelector('.score').textContent = 0;
    //         body.backgroundColor = 'darkRed';
    //     }
    // } else if (secretNumber > guess) {
    //     if (score > 1) {
    //         message.textContent = 'Too Low!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         message.textContent = 'You Lost!';
    //         document.querySelector('.score').textContent = 0;
    //         body.backgroundColor = 'darkRed';
    //     }
    // }
});

document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    console.log(secretNumber);
    document.body.style.backgroundColor = '#222';
    number.textContent = '?';
    message.textContent = 'Start guessing...';
    number.style.width = '15rem';
    score = 20;
    if (true) {
        document.querySelector('.score').textContent = 20;
        document.querySelector('.guess').value = null;
    }
});
