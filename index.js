// score points
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

// Poss button
let contentLeft = document.querySelector('#btn-left');
let contentRight = document.querySelector('#btn-right');

contentLeft.addEventListener("click", function(){
    contentLeft.style.color = "red";
    contentRight.style.color = "";
})

contentRight.addEventListener("click", function(){
    contentRight.style.color = "red";
    contentLeft.style.color = "";
});

// periods

let contentPeriod = document.querySelector('#period');
let period = 0;
contentPeriod.addEventListener('click', function(){
    period += 1
    contentPeriod.textContent = period
    if (period > 4){
        period = 0
        contentPeriod.textContent = period
        return period
    }
});
