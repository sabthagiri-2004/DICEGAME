var randomNumber1=Math.floor((Math.random()*5))+1;
var randomNumber2=Math.floor((Math.random()*5))+1;
if(randomNumber1===1){
    if(randomNumber1>randomNumber2){
        document.querySelector("h1").innerHTML="🚩Player1 wins";
        document.querySelector(".img1").setAttribute("src","images/dice2.png");
        document.querySelector(".img2").setAttribute("src","images/dice1.png");
    }
    else{
        document.querySelector("h1").innerHTML="🚩Player2 wins";
        document.querySelector(".img1").setAttribute("src","images/dice1.png");
        document.querySelector(".img2").setAttribute("src","images/dice2.png");
    }
}
else if(randomNumber1===2){
    if(randomNumber1>randomNumber2){
        document.querySelector("h1").innerHTML="🚩Player1 wins";
        document.querySelector(".img1").setAttribute("src","images/dice3.png");
        document.querySelector(".img2").setAttribute("src","images/dice2.png");
    }
    else{
        document.querySelector("h1").innerHTML="🚩Player2 wins";
        document.querySelector(".img1").setAttribute("src","images/dice2.png");
        document.querySelector(".img2").setAttribute("src","images/dice3.png");
    }

}
else if(randomNumber1===3){
    if(randomNumber1>randomNumber2){
        document.querySelector("h1").innerHTML="🚩Player1 wins";
        document.querySelector(".img1").setAttribute("src","images/dice4.png");
        document.querySelector(".img2").setAttribute("src","images/dice3.png");
    }
    else{
        document.querySelector("h1").innerHTML="🚩Player2 wins";
        document.querySelector(".img1").setAttribute("src","images/dice3.png");
        document.querySelector(".img2").setAttribute("src","images/dice4.png");
    }
}
else if(randomNumber1===4){
    if(randomNumber1>randomNumber2){
        document.querySelector("h1").innerHTML="🚩Player1 wins";
        document.querySelector(".img1").setAttribute("src","images/dice5.png");
        document.querySelector(".img2").setAttribute("src","images/dice4.png");
    }
    else{
        document.querySelector("h1").innerHTML="🚩Player2 wins";
        document.querySelector(".img1").setAttribute("src","images/dice4.png");
        document.querySelector(".img2").setAttribute("src","images/dice5.png");
    }
}
else if(randomNumber1===5){
    if(randomNumber1>randomNumber2){
        document.querySelector("h1").innerHTML="🚩Player1 wins";
        
        document.querySelector(".img1").setAttribute("src","images/dice6.png");
        document.querySelector(".img2").setAttribute("src","images/dice5.png");
    }
    else{
        document.querySelector("h1").innerHTML="🚩Player2 wins";
        document.querySelector(".img1").setAttribute("src","images/dice5.png");
        document.querySelector(".img2").setAttribute("src","images/dice6.png");
    }
}
else if(randomNumber1===6){
    if(randomNumber1>randomNumber2){
        document.querySelector("h1").innerHTML="🚩Player1 wins";
        document.querySelector(".img1").setAttribute("src","images/dice6.png");
        document.querySelector(".img1").setAttribute("src","images/dice3.png");
    }
    else{
        document.querySelector("h1").innerHTML="🚩Player2 wins";
        document.querySelector(".img1").setAttribute("src","images/dice3.png");
        document.querySelector(".img1").setAttribute("src","images/dice6.png");
    }
}

