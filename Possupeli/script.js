'use strict';

//selecting elements
const score0El= document.querySelector('#score--0');
const score1El= document.querySelector('#score--1');
// const score1El= document.qetElementById('score--1');
const diceEl=document.querySelector('.dice');
const btnNew=document.querySelector('.btn--new');
const btnRoll=document.querySelector('.btn--roll');
const btnHold=document.querySelector('.btn--hold');

//starting conditions
score0El.textContent=0;
score1El.textContent=0;
diceEl.classList.add('hidden');

let currentScore=0;
//rolling dice condition

btnRoll.addEventListener('click',function(){
    //1. Generate a random dice roll
    const dice= Math.trunc(Math.random() * 6)+1;
    console.log(dice);
    //2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src= `dice-${dice}.png`;

    //3. Check for rolled 1
if(dice !==1){
    //add dice to current score
currentScore += dice;

} else{
    //switch to next player
}



});