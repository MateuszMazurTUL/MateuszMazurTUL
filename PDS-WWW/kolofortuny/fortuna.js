document.getElementById("btn_play").addEventListener("click", play); 

document.getElementById("btn_author").addEventListener("click", toggleAbout); 

var country;
var attempts = 6;
var letters = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];

var isAbout = false;
function toggleAbout(){
    if (isAbout) {
        isAbout = !isAbout;
        document.getElementById("about").style.visibility = 'hidden';
    } else {
        isAbout = !isAbout;
        document.getElementById("about").style.visibility = 'visible';
    }
}

function hideAbout(){
    isAbout = false;
    document.getElementById("about").style.visibility = 'hidden';
}

function play(){
    prepareDivs();
    refillAttempt();
    emptyMysteryWord();
    hideBtn();//hide buttons
    hideAbout();//hide about
    showHelper();//show information about inut letter
    newCountry();
    activeKeyBind();
}

function prepareDivs(){
    document.getElementById("overall").innerHTML +=
        '<div id="mystery_word">            </div>            <div id="lifes">                <div class="underline lifebar isLifeTrue"></div>                <div class="underline lifebar isLifeTrue"></div>                <div class="underline lifebar isLifeTrue"></div>                <div class="underline lifebar isLifeTrue"></div>                <div class="underline lifebar isLifeFalse"></div>                <div class="underline lifebar isLifeFalse"></div>            </div>'
}

function refillAttempt(){
    var lb = new Array;
    lb = document.getElementsByClassName("lifebar");
    
    for(let i=0;i<=5;i++){
        lb[i].classList.remove("isLifeFalse");
        lb[i].classList.add('isLifeTrue');
    }
    
    attempts=6;
}

function removeAttempt(){
    var lb = new Array;
    lb = document.getElementsByClassName("lifebar");
    
    for(let i=5;i>=0;i--){
        if(lb[i].classList[2] == 'isLifeTrue') {
            lb[i].classList.remove("isLifeTrue");
            lb[i].classList.add('isLifeFalse');
            attempts--;
            checkAttemptsCondition();
            checkWinCondition();
            break;
        }
    }    
}

function emptyMysteryWord(){
    var lb = new Array;
    lb = document.getElementById("mystery_word").innerHTML = '';
}

function prepareMysteryWord(length){
    console.log(length);
    for(i=0;i<length;i++) {
        document.getElementById("mystery_word").innerHTML += '                <div class="underline"><span></span></div>';
    }
}

function hideDivs(){
    document.getElementById("overall").innerHTML = '<div id="description">Guess the country name</div>';
}

function hideBtn(){
    document.getElementById("btn_play").style.visibility = 'hidden';
    document.getElementById("btn_author").style.visibility = 'hidden';
}

function showBtn(){
    document.getElementById("btn_play").style.visibility = 'visible';
    document.getElementById("btn_author").style.visibility = 'visible';
}

function showHelper(){
    document.getElementById("helper").style.visibility = 'visible';
}

function hideHelper(){
    document.getElementById("helper").style.visibility = 'hidden';
}

function newCountry(){
    let r = getRandomInt(0,data.length-1);
    country = data[r]['country'];
    console.log(country);
    
    prepareMysteryWord(country.length);
}

function checkAnswer(letter){
    for(let i=0;i<country.length;i++){
        if (country[i].toLowerCase()==letter.toLowerCase()) return true;
    };
    return false;
}

function displayGoodLetter(letter){
    for(let i=0;i<country.length;i++){
        
        if (country[0].toLowerCase()==letter) diplayLetter(letter.toUpperCase(),0);
        if (country[i]==letter) diplayLetter(letter,i);
    };
}

function diplayLetter(letter,pos){
    let a= document.getElementById("mystery_word").getElementsByClassName("underline");
    a[pos].innerHTML ="<span>"+letter+"</span>"
    //console.log(a[pos]);
            //<div class="underline"><span></span></div>';
}

function activeKeyBind(){
    document.addEventListener("keydown",  evListener); 
}

function evListener(e){
    console.log(e.key);
    if(letters.includes(e.key.toLowerCase())){
            var isGoodAnswer = checkAnswer(e.key);
            if (isGoodAnswer) {
            displayGoodLetter(e.key);
            document.getElementById("letterKey").innerHTML = '<b class="goodAnswer">'+e.key+'</b>';
            }
            else{
            removeAttempt();
            document.getElementById("letterKey").innerHTML = '<b class="badAnswer">'+e.key+'</b>';
            }

            //        console.log(e.keyCode);
            //        console.log(e.key);
        }
}

function deactiveKeyBind(){
    document.removeEventListener("keydown", evListener); 
}

//check player lose
function checkAttemptsCondition(){
    if(attempts == 0) {
        hideHelper();
        hideDivs();
        deactiveKeyBind();
        showBtn();
        console.log("GAME OVER")
    };
}

function checkWinCondition(){
    if(attempts == 0) console.log("GAME OVER");
}






function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
