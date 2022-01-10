window.addEventListener("load", initEvents);

var userChoice;
var userChoiceSelector;
var cpuChoice;
var btns;
function initEvents() {
    userChoiceSelector = document.querySelector("#choice");
    var playBtn = document.querySelector("#play-btn");
    playBtn.addEventListener("click", startGame);
}

function startGame() {
    btns = document.querySelectorAll(".btn");
    userChoice = userChoiceSelector.value;

    if(userChoice == "X") {
        cpuChoice = "0";
    }
    else {
        cpuChoice = "X";
    }

    for(var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click",userMove);
    }
}

function userMove() {
    // this - return the reference of current button
    var btn = this;
    btn.innerHTML = userChoice;
    btn.setAttribute('disabled','true');

    setTimeout(function(){
        cpuMove();
    },1000);
}


function cpuMove() {
    var cpuIndex = parseInt(Math.random() * 9);
    var btn = btns[cpuIndex];
    if(btn.innerHTML == "X" || btn.innerHTML == "0") {
        // console.log("Already Choosen..."+cpuIndex);
        setTimeout(function(){
            cpuMove();
        },1000);
    }
    else {
        btn.innerHTML = cpuChoice;
        btn.setAttribute('disabled','true');
    }
    
}