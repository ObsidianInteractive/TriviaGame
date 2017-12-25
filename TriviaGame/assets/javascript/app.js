$(document).ready(function(){

var question1 = "Hey, you, get off my cloud! You don't know me and you don't know my style Who be gettin' flam when they come to a jam? Here I am, here I am......";
var question2 = "I met a gypsy and she hipped me to some life game on how to stimulate then activate the left and right brain Said, Baby boy, you only funky as your last cut You focus on the past, your ass'll be a 'has-what'";
var question3 = "I was born like this, since one like this, immaculate conception I transform like this, perform like this, was Yeshua new weapon";
var question4 = "In this corner we have the funk bodysnatcher P-Funkadelic and I gat, ya Hard enough that I can chew a whole bag of rocks Chew an Avenue, chew an off street and off block";
var question5 = "When I first started back in 1989 I wasn't movin keys I barely movin dimes Started comin up fiends recognize my face Started payin off the laws so I wouldn't catch a case";
var question6 = "Gucci gang, Gucci gang, Gucci gang, Gucci gang, Gucci gang, Gucci gang, Gucci gang ";
var question7 = "King of the skreets, And when these suckas see me, they should bow to my feet and kiss the ground underneath";
var question8 = "A millionaire, I'm a young money millionaire, tougher than Nigerian hair. My criteria compared to your career this isn't fair";
var question9 = "Now, who's hot, who not? Tell me who rock, who sell out in the stores? You tell me who flopped, who copped the blue drop? Whose jewels got rocks?     Who's mostly Dolce down to the tube sock?";
var question10 = "It was all a dream, I used to read Word Up magazine, Salt'n'Pepa and Heavy D up in the limousine, Hangin' pictures on my wall, Every Saturday Rap Attack, Mr. Magic, Marley Marl";


var answers1 = ["Lil Boosie","Method Man","XXXtentacion","50 Cent"]
var answers2 = ["Ugly God","Andre 3000","Future","Lil Kim"]
var answers3 = ["Nas","Offset", "Kendrick Lamar", "Tyler the Creator"]
var answers4 = ["Redman", "The Game", "Black Thought", "G Easy"]
var answers5 = ["Bun B", "Slick Rick", "Lil Uzi Vert", "Ja Rule"]
var answers6 = ["Lil Pump", "Ludacris", "Cardi B", "Ghostface Killa"]
var answers7 = ["Jay Z", "Gucci Mane", "Rakim", "Nicki Minaj"]
var answers8 = ["Lil Wayne", "Canibus", "Big Baby DRAM", "Jadakiss"]
var answers9 = ["Snoop Dog", "Mase", "LL Cool J","Young Jeezy" ]
var answers10 = ["Biggie Smalls", "Juicy J", "E 40", "Drake"]


var questionArray=[question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];
var answersArray=[answers1, answers2, answers3, answers4, answers5, answers6, answers7, answers8, answers9, answers10];

var counterCorrect=0;
var counterIncorrect=0;
var counterNotGuessed=0;
var intervalId=0;
var time=10;    
var clickedButton;
var number=0;


$(".timer").css("visibility","hidden");

	//hid start button, show first question when start button is clicked
	$("#startButton").on("click", function(){
		$("#startButton").css("visibility","hidden");
		$(".questionBox").css("visibility","visible");
		reset();
		displayQuestion(number);
    });


	//Correct and incorrect answer functions. Recognizes correct button click and inputs gifs to HTML.
	$(".answer").on("click",function(){
		clearInterval(intervalId);
		clickedButton=$(this).attr("data-store");
		console.log(clickedButton);

		if (clickedButton==="Method Man"){
			correct();
			$("#question").html("<img class='giph' src='assets/images/methodman.gif'>");
		}
		if (clickedButton==="Lil Boosie"||clickedButton==="XXXtentacion"||clickedButton==="50 Cent"){
			incorrect();
			$("#question").html("<img class='giph' src='assets/images/wrong1.gif'>");	
		}
		if (clickedButton==="Andre 3000"){
			correct();
			$("#question").html("<img class='giph' src='assets/images/andre.gif'>");
		}
		if (clickedButton==="Ugly God"||clickedButton==="Future"||clickedButton==="Lil Kim"){
			incorrect();
			$("#question").html("<img class='giph' src='assets/images/wrong2.gif'>");
		}
		if (clickedButton==="Kendrick Lamar"){
			correct();
			$("#question").html("<img class='giph' src='assets/images/kendrick.gif'>");
		}
		if (clickedButton==="Nas"||clickedButton==="Offset"||clickedButton==="Tyler the Creator"){
			incorrect();
			$("#question").html("<img class='giph' src='assets/images/wrong3.gif'>");
		}
		if (clickedButton==="Redman"){
			correct();
			$("#question").html("<img class='giph' src='assets/images/redman.gif'>");	
		}
		if (clickedButton==="The Game"||clickedButton==="Black Thought"||clickedButton==="G Easy"){
			incorrect();
			$("#question").html("<img class='giph' src='assets/images/wrong4.gif'>");
        }
        if (clickedButton==="Bun B"){
            correct();
            $("#question").html("<img class='giph' src='assets/images/bunb.gif'>")
        }
        if (clickedButton==="Slick Rick"||clickedButton==="Lil Uzi Vert"||clickedButton==="Ja Rule"){
            incorrect();
            $("#question").html("<img class='giph' src='assets/images/wrong5.gif'>")
        }
        if (clickedButton==="Lil Pump"){
			correct();
			$("#question").html("<img class='giph' src='assets/images/lilpump.gif'>");	
		}
		if (clickedButton==="Ludacris"||clickedButton==="Cardi B"||clickedButton==="Ghostface Killa"){
			incorrect();
			$("#question").html("<img class='giph' src='assets/images/wrong6.gif'>");
        }
        if (clickedButton==="Gucci Mane"){
			correct();
			$("#question").html("<img class='giph' src='assets/images/gucci.gif'>");	
		}
		if (clickedButton==="Jay Z"||clickedButton==="Rakim"||clickedButton==="Nicki Minaj"){
			incorrect();
			$("#question").html("<img class='giph' src='assets/images/wrong7.gif'>");
        }
        if (clickedButton==="Lil Wayne"){
			correct();
			$("#question").html("<img class='giph' src='assets/images/wayne.gif'>");	
		}
		if (clickedButton==="Canibus"||clickedButton==="Big Baby DRAM"||clickedButton==="Jadakiss"){
			incorrect();
			$("#question").html("<img class='giph' src='assets/images/wrong8.gif'>");
        }
        if (clickedButton==="Mase"){
			correct();
			$("#question").html("<img class='giph' src='assets/images/mase.gif'>");	
		}
		if (clickedButton==="Snoop Dogg"||clickedButton==="LL Cool J"||clickedButton==="Young Jeezy"){
			incorrect();
			$("#question").html("<img class='giph' src='assets/images/wrong9.gif'>");
        }
        if (clickedButton==="Biggie Smalls"){
			correct();
			$("#question").html("<img class='giph' src='assets/images/big.gif'>");	
		}
		if (clickedButton==="Juicy J"||clickedButton==="E 40"||clickedButton==="Drake"){
			incorrect();
			$("#question").html("<img class='giph' src='assets/images/wrong10.gif'>");
		}
		//for last question, execute display end function after answer is selected
		if (clickedButton==="Silly"){
			$(".answer").css("visibility","hidden");
			$(".timer").css("visibility","hidden");
			$("#status").html("Correct!!!");
			countCorrect++;
			number++;
			$("#question").html("<img class='giph' src='assets/images/dwarfs.gif'>");
			setTimeout(function(){displayEnd();},3000);
		}
		if (clickedButton==="Sleepy"||clickedButton==="Grumpy"||clickedButton==="Doc"){
			$(".answer").css("visibility","hidden");
			$(".timer").css("visibility","hidden");
			$("#status").html("That's not right...");
			countIncorrect++;
			number++;
			$("#question").html("<img class='giph' src='assets/images/dwarfs.gif'>");
			setTimeout(function(){displayEnd();},3000);
		}
	});
	//replaces html with question and answer choices
	function displayQuestion(number){
		timerRun();
		$(".timer").css("visibility","visible");
		$(".answer").css("visibility","visible");
		$("#status").html("");
		$("#question").html(questionArray[number]);

		$("#answerChoice0").html(answersArray[number][0]);
		$("#answerChoice1").html(answersArray[number][1]);
		$("#answerChoice2").html(answersArray[number][2]);
		$("#answerChoice3").html(answersArray[number][3]);

		$("#answerChoice0").attr("data-store",answersArray[number][0]);
		$("#answerChoice1").attr("data-store",answersArray[number][1]);
		$("#answerChoice2").attr("data-store",answersArray[number][2]);
		$("#answerChoice3").attr("data-store",answersArray[number][3]);


	}
	//when answer choice is correct, executes this function
	function correct(){
			$(".answer").css("visibility","hidden");
			$(".timer").css("visibility","hidden");
			$("#status").html("Fosho!!!");
			counterCorrect++;
			number++;
			setTimeout(function(){displayQuestion(number);},3000);
	}
	//when answer choice is incorrect, execute this function
	function incorrect(){
			$(".answer").css("visibility","hidden");
			$(".timer").css("visibility","hidden");
			$("#status").html("WRONG!!!!");
			counterIncorrect++;
			number++;
			setTimeout(function(){displayQuestion(number);},3000);
	}

	//function displayed at the end of the game. Shows correct, incorrect, and ran out of time guesses
	function displayEnd(){
		$(".timer").css("visibility","hidden");
		$("#status").html("");
		$(".answer").css("visibility","hidden");
		$("#startButton").css("visibility","visible");
		$("#question").html("");
		$("#question").append("<div class='stat'> Correct Guesses: " + counterCorrect + "</div>");
		$("#question").append("<div class='stat'> Incorrect Guesses: " + counterIncorrect +"</div>");
		$("#question").append("<div class='stat'> Ran out of Time: " + counterNotGuessed + "</div>");
		$("#answerChoice3").html("");
	}

	//resets variables
	function reset(){
		time=10;
		number=0;
		counterCorrect=0;
		counterIncorrect=0;
		countNotGuessed=0;

		$("#time").html(time);
	}

	//timer functions
	function timerRun(){
		time=10;
		$(".timer").css("visibility","visible");
		$("#time").html(time);
		intervalId = setInterval(countdown,1000)

		$(".answer").on("click",function(){
			clearInterval(intervalId);
		});
	}

	function countdown(){
		time--;
		$("#time").html(time);
		if (time===0){
			if (number<4){
				$("#status").html("Time's Up!");
				clearInterval(intervalId);
				counterNotGuessed++;
				number++;
				setTimeout(function(){displayQuestion(number);},2500);
			}
			else{
				$("#status").html("Time's Up!");
				clearInterval(intervalId);
				counterNotGuessed++;
				number++;
				setTimeout(function(){displayEnd();},2500);
			}
		}
	}
});
