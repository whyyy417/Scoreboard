// score points
let scoreElHome = document.getElementById("scoreHome");
let scoreElGuest = document.getElementById("scoreGuest");
let scoreHome = 0;
let scoreGuest = 0;

function addOneHome(){
    scoreHome ++
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

//stopwatch

let timeEl = document.querySelector('#timer');
let startBtn = document.querySelector('#start');
let stopBtn = document.querySelector('#stop');
let resetBtn = document.querySelector('#reset');

let seconds = 721;
let interval = null;
// timeEl.textContent = '20:00'
startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);

function timer(){
    timeEl.textContent = seconds
    seconds--

    let mins = Math.floor(seconds / 60);
    let secs = seconds % 60;

    if (mins < 10) mins = '0' + mins;
    if (secs < 10) secs = '0' + secs;

    timeEl.textContent = mins + ':' + secs

}
 timer();

 function start(){
    if (interval){
        return
    }
    interval = setInterval(timer, 1000);
}

function stop(){
    clearInterval(interval);
    interval = null;
}

function reset(){
    stop();
    seconds = 721;
    timer()
  
}