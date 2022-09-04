let scoreElHome = document.getElementById("scoreHome");
let scoreElGuest = document.getElementById("scoreGuest");
let scoreHome = 0;
let scoreGuest = 0;

function addOneHome(){
    scoreHome +=  1
    scoreElHome.textContent = scoreHome
};

function addTwoHome(){
    scoreHome +=  2
    scoreElHome.textContent = scoreHome
};

function addThreeHome(){
    scoreHome +=  3
    scoreElHome.textContent = scoreHome
};

function addOneGuest(){
    scoreGuest +=  1
    scoreElGuest.textContent = scoreGuest
};

function addTwoGuest(){
    scoreGuest +=  2
    scoreElGuest.textContent = scoreGuest
};

function addThreeGuest(){
    scoreGuest +=  3
    scoreElGuest.textContent = scoreGuest
};

let btnLeft = document.querySelector('#btn-left');
let btnRight = document.querySelector('#btn-right');
let contentLeft = document.querySelector('#btn-left');
let contentRight = document.querySelector('#btn-right');
btnLeft.addEventListener('click',() => contentLeft.style.color = 'red');
btnRight.addEventListener('click',() => contentRight.style.color = 'red');


