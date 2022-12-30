/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
const suits = ["♦", "♥", "♠", "♣"];
const values = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
var suit = suits[Math.floor(Math.random() * 3)];
var value = values[Math.floor(Math.random() * 12)];
window.onload = function() {
  if (suit == "♥" || suit == "♦") {
    document.querySelector(".upperSuit").style.color = "red";
    document.querySelector(".lowerSuit").style.color = "red";
  }
  document.querySelector(".upperSuit").innerHTML = suit;
  document.querySelector(".lowerSuit").innerHTML = suit;
  document.querySelector(".value").innerHTML = value;
};

window.clickFunction = function clickFunction() {
  var newSuit = suits[Math.floor(Math.random() * 3)];
  var newValue = values[Math.floor(Math.random() * 12)];
  if (newSuit == "♥" || newSuit == "♦") {
    document.querySelector(".upperSuit").style.color = "red";
    document.querySelector(".lowerSuit").style.color = "red";
  } else {
    document.querySelector(".upperSuit").style.color = "black";
    document.querySelector(".lowerSuit").style.color = "black";
  }
  document.querySelector(".upperSuit").innerHTML = newSuit;
  document.querySelector(".lowerSuit").innerHTML = newSuit;
  document.querySelector(".value").innerHTML = newValue;
};
