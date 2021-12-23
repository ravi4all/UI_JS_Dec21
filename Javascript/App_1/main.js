// Event Binding - we bind event with a function
// so when event is triggered the function gets executed...
// the function is the call back function

// let's you load your HTML first, then call bindEvent function
window.addEventListener("load",bindEvent);
function bindEvent() {
    // binding show function with button
    // so whenever user will click on button, show function will be called...
    document.getElementById("btn").addEventListener("click",show);
}

function show() {
    console.log("Show function executed...");
    // alert("Hello User...");
    // window.document.getElementById("box");
    var box = document.getElementById("box");
    var outputBox = document.getElementById("output");

    var username = box.value;
    if(username == "") {
        alert("Please Enter your name...");
    }
    else {
        outputBox.innerHTML = username;
        box.value = "";
    }
    // alert("Hello " + username);
}