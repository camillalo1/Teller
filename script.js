// Funksjon for å telle eller resette

let displayNum = "";

function addNum(){
    displayNum++
    document.getElementById("display").innerHTML=displayNum;
}

function subNum(){
    displayNum--
    document.getElementById("display").innerHTML=displayNum;
}

function clearDisplay(){
    displayNum = "0";
    document.getElementById("display").innerHTML=displayNum;
}

// Funksjon for å bytte bakgrunnsfarger

const background = document.getElementsByClassName('backgroundColors');
var chosenColor = '';

function backgroundChange(color, markChosen){
    chosenColor=color
    document.body.style.backgroundColor= chosenColor;
    markChosen.innerHTML.style.border= "2px solid gray";
}


