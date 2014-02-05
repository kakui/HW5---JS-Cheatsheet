//This is a cheatsheet to test different JS code
//I've set up my consoles to test most of the different elements learned in class

//Variables
var x = 20
var y = 50

//Alerts
alert("Welcome to Ka Kui's JS test page!");

//Strings and Numbers
var stringHello = "Hello"
var stringBye = "Bye"
var numberOne = 1
var anotherOne = 1

//Arrays
var cool_animals = ["dragon", "lion", "panda"];
var lame_animals = ["chicken", "pig", "cow"];

//Console
console.log(x + y);
console.log(stringHello);
console.log(numberOne);
console.log(cool_animals);
console.log(lame_animals);
console.log(cool_animals[0]);
/* Question for Zach: why won't console.log (cool_animals[0][2]); print dragon and panda? */

//Testing
console.log(numberOne === anotherOne);
console.log(numberOne > anotherOne);
console.log(stringHello === stringBye);

//Logic
if (x > y){
	console.log("x is greater than y");
}else{
	alert("x is not greater than y dummy");
}

//Functions
function addFive(number){
	return number + 5;
}
console.log(addFive(5));

//3 Functions
function guessTen(number){
	if(number > 10){
		alert("less than 10!");
	}else if(number === 10){
		alert("it is 10!");
	}
	else{
		alert("try again");
	}
} 

function guessName(name){
	if(name === 'Ka Kui'){
		console.log("my name is Ka Kui!");
	}else if(name === 'kakui'){
		console.log("add a space to " + name);
	}else{
		console.log("that's not my name!");
	}
}

function coolName(stringName){
	return "you entered the cool name " + stringName;
}