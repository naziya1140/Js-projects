const num= Math.round(Math.random()*100+1);//+1 for removing 0 from random selection.

const guessField=parseInt(document.getElementsByClassName('guessField'));
const submit = document.getElementsByClassName('submt')
const prevGuess = document.getElementById('prevGuess');
const chance = document.getElementById('chance');
const lowOrHi= document.getElementsByClassName('lowOrHi')

let noOfguesses=1;
const arr=[];
let playGame=true;//this is important variable for playing a game.

const p= document.createElement('p');

let currentNum=guessedField.value;
function validateGuess(currentNum){
    if(currentNum<=0 || isNaN(currentNum) || currentNum ==''){

    }
};

function checkGuess(currentNum){
    if(currentNum>100 || currentNum<1){

    }

};

function displayGuess(currentNum){
    arr.add(guessedNum.value);
    noOfguesses++;
    prevGuess.innerHTML=arr;
    chance.innerHTML=noOfguesses;
}
