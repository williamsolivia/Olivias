$(document).ready(function(){
	$("button").click(function(){
	$("h1").css("text-align", "right");
	$("h1").css("color", "red");
	var sentence = "The" +  numOfpeps  + "people ate" + numOfcandy  +  "pieces of candy. So each person get" +  b  + "piece of a candy.";
console.log(sentence);
	var name = $("#first_name").val();
console.log(name);
	});
});

var numOfpeps = 200;
var numOfcandy = 40;
var b = 0
console.log(numOfpeps);
console.log(numOfcandy);
console.log(b);
b = numOfpeps / numOfcandy

var sentence = "The" +  numOfpeps  + "people ate" + numOfcandy  +  "pieces of candy. So each person get" +  b  + "piece of a candy.";
console.log(sentence);
var name = $("")

var name = $("#first_name").val();
console.log(name);

