$(document).ready(function(){

var question1 = "Hey, you, get off my cloud! You don't know me and you don't know my style Who be gettin' flam when they come to a jam? Here I am, here I am......"
var question2 = "I met a gypsy and she hipped me to some life game on how to stimulate then activate the left and right brain Said, Baby boy, you only funky as your last cut You focus on the past, your ass'll be a 'has-what'"
var question3 = "I was born like this, since one like this, immaculate conception I transform like this, perform like this, was Yeshua new weapon"
var question4 = "In this corner we have the funk bodysnatcher P-Funkadelic and I gat, ya Hard enough that I can chew a whole bag of rocks Chew an Avenue, chew an off street and off block"
var question5 = "When I first started back in 1989 I wasn't movin keys I barely movin dimes Started comin up fiends recognize my face Started payin off the laws so I wouldn't catch a case"
var question6 = "Gucci gang, Gucci gang, Gucci gang, Gucci gang, Gucci gang, Gucci gang, Gucci gang "
var question7 = "King of the skreets, And when these suckas see me, they should bow to my feet and kiss the ground underneath"
var question8 = "A millionaire, I'm a young money millionaire, tougher than Nigerian hair. My criteria compared to your career this isn't fair"
var question9 = "Now, who's hot, who not? Tell me who rock, who sell out in the stores? You tell me who flopped, who copped the blue drop? Whose jewels got rocks?     Who's mostly Dolce down to the tube sock?"
var question10 = "It was all a dream, I used to read Word Up magazine, Salt'n'Pepa and Heavy D up in the limousine, Hangin' pictures on my wall, Every Saturday Rap Attack, Mr. Magic, Marley Marl"

var answers1 = ["Lil Boosie","Method Man","XXXtentacion","50 Cent"]
var answers2 = ["Ugly God","Andre 300","Future","Lil Kim"]
var answers3 = ["Nas","Offset", "Kendrick lamar", "Tyler the Creator"]
var answers4 = ["Redman", "The Game", "Black Thought", "G-Easy"]
var answers5 = ["Bun B", "Slick Rick", "Lil Uzi Vert", "Ja Rule"]
var answers6 = ["Lil Pump", "Ludacris", "Cardi B", "Ghostface Killa"]
var answers7 = ["Jay Z", "Gucci Mane", "Rakim", "Nicki Minaj"]
var answers8 = ["Lil Wayne", "Canibus", "Big Baby DRAM", "Jadakiss"]
var answers9 = ["Snoop Dog", "Mase", "LL Cool j","Young Jeezy" ]
var answers10 = ["Biggie Smalls", "Juicy J", "E 40", "Drake"]

var questionArray=[question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];
var answerArray=[answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10];


var counterCorrect=0;
var counterIncorrect=0;
var counterNoGuess=0;
var intervalId=0;
var time=30;
var answerChoices;
var clickedButton;
var j=0;
var number=0;

$(".timer").css("visibility","hidden");

	//hid start button, show first question when start button is clicked
	$("#startButton").on("click", function(){
		$("#startButton").css("visibility","hidden");
		$(".questionBox").css("visibility","visible");
		reset();
		displayQuestion(number);
}});