
function check (){
	
	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var question9 = document.quiz.question9.value;
	var question10 = document.quiz.question10.value;
	var correct = 0;
	

    if (question1 == "children") {
		correct++;
}
	if (question2 == "men/woman") {
		correct++;
}	
	if (question3 == "Babies") {
		correct++;
	}
	if (question4 == "potatoes") {
		correct++;
}
	if (question5 == "watches") {
		correct++;
}	
	if (question6 == "memo") {
		correct++;
	}
	if (question7 == "mouse") {
		correct++;
}
	if (question8 == "buses") {
		correct++;
}	
	if (question9 == "teeth") {
		correct++;
	}
	if (question10 == "people") {
		correct++;
	}
	
	
	var messages = ["Great job!", "That's just okay", "You really need to do better"];
	var score;
	
	if (correct < 5) {
		score = 2;
	}
	
	if (correct > 4 && correct <10){
		score = 1;
	}
	
	if (correct == 10) {
		score = 0;
	}
	
	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	}
	