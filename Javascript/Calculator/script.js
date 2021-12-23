window.addEventListener("load", bindEvents);

function bindEvents() {
    var addBtn = document.querySelector("#add");
    var subBtn = document.querySelector("#sub");
    var divBtn = document.querySelector("#div");
    var mulBtn = document.querySelector("#mul");

    resultBox = document.querySelector("#res");
    resultBox.setAttribute('readonly',true);

    addBtn.addEventListener("click", add);
    subBtn.addEventListener("click", sub);
    divBtn.addEventListener("click", div);
    mulBtn.addEventListener("click", mul);
}

function add() {
    var fnum = document.querySelector("#fnum").value;
    var snum = document.querySelector("#snum").value;
    // we need to perform type casting
    // convert one type of data into another
    var result = parseInt(fnum) + parseInt(snum);
    resultBox.value = result;
    // console.log(result);
}

function sub() {
    var fnum = document.querySelector("#fnum").value;
    var snum = document.querySelector("#snum").value;
    // we need to perform type casting
    // convert one type of data into another
    var result = parseInt(fnum) - parseInt(snum);
    resultBox.value = result;
    // console.log(result);
}

function div() {
    var fnum = document.querySelector("#fnum").value;
    var snum = document.querySelector("#snum").value;
    // we need to perform type casting
    // convert one type of data into another
    var result = parseInt(fnum) / parseInt(snum);
    resultBox.value = result;
    // console.log(result);
}

function mul() {
    var fnum = document.querySelector("#fnum").value;
    var snum = document.querySelector("#snum").value;
    // we need to perform type casting
    // convert one type of data into another
    var result = parseInt(fnum) * parseInt(snum);
    resultBox.value = result;
    // console.log(result);
}