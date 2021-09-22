/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  myFunction();
};

function myFunction() {
  let suits = ["&hearts;", "&spades;", "&clubs;", "&diams;"];
  let numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

  let randomSuit = Math.floor(Math.random() * suits.length);
  let randomNum = Math.floor(Math.random() * numbers.length);

  let suit = suits[randomSuit];
  let number = numbers[randomNum];

  if (suit == "&hearts;" || suit == "&diams;") {
    document.querySelector("#card").style.color = "red";
  } else {
    document.querySelector("#card").style.color = "black";
  }

  document.querySelector("#TopLeft").innerHTML = suit;
  document.querySelector("#Center").innerHTML = number;
  document.querySelector("#BottomRight").innerHTML = suit;
}
