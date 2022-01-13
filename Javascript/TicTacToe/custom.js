window.addEventListener("load", initEvents);

var userChoice;
var userChoiceSelector;
var cpuChoice;
var btns;

var winning_combinations = [[0,1,2],[3,4,5],[6,7,8],
                            [0,3,6],[1,4,7],[2,5,8],
                            [0,4,8],[2,4,6]];

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
    checkWinner(userChoice, btn.title);

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
        checkWinner(cpuChoice, cpuIndex);
    }
    
}


function checkWinner(choice, pos) {
    for(var i = 0; i < winning_combinations.length; i++) {
        for(var j = 0; j < winning_combinations[i].length; j++) {
            if (pos == winning_combinations[i][j]) {
                winning_combinations[i][j] = choice;
            }
        }
    }

    // Write loop to check winner

}