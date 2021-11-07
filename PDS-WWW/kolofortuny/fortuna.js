document.getElementById("btn_play").addEventListener("click", play); 

document.getElementById("btn_author").addEventListener("click", toggleAbout); 

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

function play(){
    refillAttempt();
    emptyMysteryWord();
}

function refillAttempt(){
    var lb = new Array;
    lb = document.getElementsByClassName("lifebar");
    
    for(let i=0;i<=5;i++){
        lb[i].classList.remove("isLifeFalse");
        lb[i].classList.add('isLifeTrue');
    }
}

function removeAttempt(){
    var lb = new Array;
    lb = document.getElementsByClassName("lifebar");
    
    for(let i=5;i>=0;i--){
        if(lb[i].classList[2] == 'isLifeTrue') {
            lb[i].classList.remove("isLifeTrue");
            lb[i].classList.add('isLifeFalse');
            break;
        }
    }    
}

function emptyMysteryWord(){
    var lb = new Array;
    lb = document.getElementById("mystery_word").getElementsByClassName("underline");
    
    console.log(lb);
    /*for(let i=0;i<=5;i++){
        lb[i].classList.remove("isLifeFalse");
        lb[i].classList.add('isLifeTrue');
    }*/
}












var game = {
  zdobyte : 0,
  zycia : 1,
}
//alert(data[0]['country']);
//var elem = document.getElementById("panstwa");
//elem.innerHTML =data[0]['country'];

//alert(data.length);
//alert(data[0]['country'][2]);

 for (var i = 0; i < data[0]['country'].length; i += 1) {
    //alert(data[0]['country'][i]);  
  }


addElement("wrap");
//LISTENERS

document.getElementById("graj").addEventListener("click", Sprawdz_Litery); 
//alert(game.zycia);


//FUNKCJE
function Sprawdz_Litery(){
  var liter = document.getElementById("wpisz_litere").value;
  //alert(liter);
  //alert(getRandomInt(10,20));
}


function addElement(mydiv)
{
 
  newDiv = document.createElement("span");
  newDiv.innerHTML = "";

  my_div = document.getElementById(mydiv);
  document.body.insertBefore(newDiv, my_div);

  newDiv2 = document.createElement("span");
  newDiv2.innerHTML = "jasiokotek2";
  document.body.insertBefore(newDiv2, my_div.nextSibling);

  newDiv.classList.add("mystyle");  
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
