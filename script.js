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