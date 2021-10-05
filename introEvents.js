console.log("js loaded");
var btn = document.getElementById("btn");


/////////////////// event handler method ////////////////


// btn.onclick = setInterval(function(){
//     alert("but clicked");
// }, 10000)

function test(){
    alert("test function call through refrence");
}

// btn.onclick = test;


//////////////////// event listner method //////////////////



btn.addEventListener('click', bgChange);
var myDiv = document.querySelector("body div");

function bgChange(){
    var colorCode = ("rgb(" + Math.floor(Math.random() * 255) + "," +  Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")");
    myDiv.style.background = colorCode;
}