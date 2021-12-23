window.addEventListener("load", bindEvents);

function bindEvents() {
    var addBtn = document.querySelector("#add");
    var subBtn = document.querySelector("#sub");
    var divBtn = document.querySelector("#div");
    var mulBtn = document.querySelector("#mul");

    fnum = document.querySelector("#fnum");
    snum = document.querySelector("#snum");

    resultBox = document.querySelector("#res");
    resultBox.setAttribute('readonly',true);

    addBtn.addEventListener("click", add);
    subBtn.addEventListener("click", sub);
    divBtn.addEventListener("click", div);
    mulBtn.addEventListener("click", mul);
}

function add() {
    var result = parseInt(fnum.value) + parseInt(snum.value);
    resultBox.value = result;
}

function sub() {
    var result = parseInt(fnum.value) - parseInt(snum.value);
    resultBox.value = result;
}

function div() {
    var result = parseInt(fnum.value) / parseInt(snum.value);
    resultBox.value = result;
}

function mul() {
    var result = parseInt(fnum.value) * parseInt(snum.value);
    resultBox.value = result;
}