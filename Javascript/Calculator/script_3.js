window.addEventListener("load", bindEvents);

function bindEvents() {
    // now we will get list of elements i.e., array
    var btns = document.querySelectorAll(".btn");
    fnum = document.querySelector("#fnum");
    snum = document.querySelector("#snum");

    resultBox = document.querySelector("#res");
    resultBox.setAttribute('readonly',true);

    for(var i = 0; i < btns.length; i++){
        btns[i].addEventListener("click", calc);
    }

}

function calc() {
    // console.log("Clicked...");
    // this - return current object
    // console.log(this);
    if(this.innerHTML == "+") {

    }
    else if(this.innerHTML == "-") {

    }
}