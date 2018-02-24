
console.log("Up and Running!");

var cards = [ "queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
cardsInPlay.push('cardOne');
console.log("User flipped" + " " + cardOne);

var cardTwo = cards[2];
cardsInPlay.push('cardTwo');
console.log("User flipped" + " " + cardTwo);

if (cardsInPlay.length === 2) {
	// Code to be executed if condition1 is true

}  if (cardsInPlay[0] === cardsInPlay[2]){
   alert("You found a match!") 

   } else {
   	alert("Sorry, try again.")
   }