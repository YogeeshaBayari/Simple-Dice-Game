var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomDiceImage = "dice" + randomNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImage);

var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 wins !!😎 ";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 wins !!🤭 ";
} else if ((randomNumber1 = randomNumber2)) {
  document.querySelector("h1").innerHTML = "Match Draw...!!😂 ";
}
alert(" REFRESH THE PAGE FOR NEXT GAME ");

