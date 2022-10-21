"use strict";

if (document.isConnected){
    window.addEventListener("load", init);
}

function init(){
    document.getElementById("Bigger!").onclick = () => makeBigger;
    document.getElementById("radio").onchange = () => makeFancy;
    document.getElementById("Cypher").onclick = () => cypher;
}

function makeBigger(){
    document.getElementById("text").style.fontSize="24pt";
}
function makeFancy(){
    if (document.getElementById("fancy").checked){
        document.getElementById("text").style.fontWeight="bold";
        document.getElementById("text").style.color="blue";
        document.getElementById("text").style.textDecoration="underline";
    }else if(document.getElementById("boring").checked){
        document.getElementById("text").style.fontWeight="normal";
        document.getElementById("text").style.color="black";
        document.getElementById("text").style.textDecoration="none";
    }
}

function cypher(){
    let str = document.getElementById("text").value
    document.getElementById("result").textContent = shiftCipher(str);
}
function shiftCipher(text){
    text = text.toLowerCase();
    let result = "";
    for (let i = 0; i < text.length; i++){
      if (text[i] < 'a' || text[i] > 'z'){
        result += text[i];
      } else if (text[i] == 'z'){
        result += 'a';
      } else {
        let letter = text.charCodeAt(i);
        let resultLetter = String.fromCharCode(letter + 1);
        result += resultLetter;
      }
    }
    return result;
  }