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

function backgroundChange1(){
    document.body.style.backgroundColor= "yellow";
}

function backgroundChange2(){
    document.body.style.backgroundColor= "pink";
}

function backgroundChange3(){
    document.body.style.backgroundColor= "gray";
}