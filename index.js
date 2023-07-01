'use strict';
// Main Variables
const welcomeText = document.querySelector('.welcome-text');
const startText = document.querySelector('.start-text')
const horizontalRule = document.querySelector('.hr');

const startBox = document.querySelector('.go-box');
const box = document.querySelector('.green-go')

const startDiv = document.querySelector('.start');
const redBox = document.querySelector('.red-box');
const greenBox = document.querySelector('.green-box');

const wonWindow = document.querySelector('.won-window');
const won = document.querySelector('.won');

const retryButton = document.querySelector('.retry');
const menuButton = document.querySelector('.menu');

const lossWindow = document.querySelector('.loss-window');
const loss = document.querySelector('.loss');

// Functions

function closeLandingPage() {
    welcomeText.classList.add('hidden');
    startText.classList.add('hidden');
    horizontalRule.classList.add('hidden');
    box.classList.add('hidden');
    startBox.classList.add('hidden');
}

function openLandingPage() {
    welcomeText.classList.remove('hidden');
    startText.classList.remove('hidden');
    horizontalRule.classList.remove('hidden');
    box.classList.remove('hidden');
    startBox.classList.remove('hidden');
    closeGameUI();
    closeWinLossPage();
}

function openGameUI() {
    startDiv.classList.remove('hidden');
    redBox.classList.remove('hidden');
}

function closeGameUI() {
    startDiv.classList.add('hidden');
    redBox.classList.add('hidden');
    greenBox.classList.add('hidden');
}

function closeWinLossPage() {
    loss.classList.add('hidden');
    won.classList.add('hidden');
}

const randomTime = Math.floor(Math.random() * 3) + 1;
let delay;

switch(randomTime) {
    case 1:
        delay = 2000;
        break;
    case 2:
        delay = 4000;
        break;
    case 3:
        delay = 6000;
        break;
    default:
        console.log(`ERROR - Delay cannot be initialized.`)
}

function colorChange() {
    setTimeout(() => {
        redBox.classList.add('hidden');
        greenBox.classList.remove('hidden');
    }, delay);
}

function buttons() {
    menuButton.addEventListener('click', function() {
        openLandingPage();
    })
    retryButton.addEventListener('click', function() {
        closeWinLossPage();
        openGameUI();
        colorChange();
    })
}

// Misc Events

box.addEventListener('click', function() {
    closeLandingPage();
    openGameUI();
    colorChange();
})

// Game

redBox.addEventListener('click', function() {
    closeGameUI();
    loss.classList.remove('hidden');
    buttons();
})

greenBox.addEventListener('click', function game() {
    closeGameUI();
    setTimeout(() => {
        won.classList.remove('hidden');
        buttons();
    }, 100)
})
/*


  ______ _____ _______ _     _ _     _ ______    _______  _____  _______    / __   _  _____  _______        _______ _______ ______   _____ 
 |  ____   |      |    |_____| |     | |_____]   |       |     | |  |  |   /  | \  | |     |    |    |      |_____| |  |  | |_____] |     |
 |_____| __|__    |    |     | |_____| |_____] . |_____  |_____| |  |  |  /   |  \_| |_____|    |    |_____ |     | |  |  | |_____] |_____|
                                                                         /                                                                 


*/