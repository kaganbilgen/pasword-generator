const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passOneEl = document.getElementById("passone-el")
let passTwoEl = document.getElementById("passtwo-el")
let passLenEl = document.getElementById("passlen-el")
let symbolsBtn = document.getElementById("symbols-btn")
let numbersBtn = document.getElementById("numbers-btn")
let alertSpn = document.getElementById("alert-spn")
let symbolsOn = true
let numbersOn = true
let choosenCharacters = characters


function toggleChars(id){
     switch(id) {
        case "symbols-btn":
        if (symbolsOn){
            symbolsBtn.textContent = "Symbols: OFF";
            symbolsOn = false;
            generateCharacters();
        }
        else{
            symbolsBtn.textContent = "Symbols: ON";
            symbolsOn = true;
            generateCharacters();            
        }
    break;
        case "numbers-btn":
        if (numbersOn){            
            numbersBtn.textContent = "Numbers: OFF";
            numbersOn = false;
            generateCharacters();            
        }
        else{            
            numbersBtn.textContent = "Numbers: ON";
            numbersOn = true;
            generateCharacters();            
        }
     break;
    }   
    
}


function generateCharacters(){
    if (symbolsOn && numbersOn){
        choosenCharacters = characters;
        }

    else if (symbolsOn && !numbersOn){
        choosenCharacters = characters.slice(0,52).concat(characters.slice(62))

        }

    else if (!symbolsOn && numbersOn){
        choosenCharacters = characters.slice(0,62)        
        }

    else if (!symbolsOn && !numbersOn){
        choosenCharacters = characters.slice(0,52)

        }   
}

function generatePass(){
    var pass
    let passLen = passLenEl.value
    if (passLen.length === 0){
        alertSpn.textContent = "Please enter a password length."
        return
        }
    else if(parseInt(passLen)>20){
        alertSpn.textContent ="Password cannot be longer than 20 characters."
        return
    }
    else{
        passLen = parseInt(passLen)
        for(let i=0; i<passLen; i++){
            if(i === 0){
                pass = choosenCharacters[Math.floor(Math.random()*choosenCharacters.length)]
            }
            else {
                pass += choosenCharacters[Math.floor(Math.random()*choosenCharacters.length)]
                }
            }
            return pass
        }
}




function getPass(){
    let passOne = generatePass()
    let passTwo = generatePass()
    passOneEl.textContent = passOne
    passTwoEl.textContent = passTwo
}

function copyPass(id){
    let copyText = document.getElementById(id).textContent
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText)
}
