let player1=prompt("enter player 1 name");
document.querySelectorAll("p")[0].textContent=player1;
let player2=prompt("enter player 2 name");
document.querySelectorAll("p")[1].textContent=player2;
var randomnumber1=Math.floor(Math.random()*6)+1;
var randomimg1="dice" + randomnumber1 + ".png";
var randomsource1="images/" + randomimg1;
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randomsource1);
var randomnumber2=Math.floor(Math.random()*6)+1;
var randomimg2="images/dice" + randomnumber2 + ".png"
document.querySelectorAll("img")[1].setAttribute("src",randomimg2);

if(randomnumber1>randomnumber2)
{
    document.querySelector("h1").innerHTML=player1 + " wins ";
}
else if(randomnumber1>randomnumber2)
{
    document.querySelector("h1").innerHTML=player2 + " wins ";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}