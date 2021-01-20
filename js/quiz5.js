
function check (){
	
	var question1 = document.quiz5.question1.value;
	var question2 = document.quiz5.question2.value;
	var question3 = document.quiz5.question3.value;
	var question4 = document.quiz5.question4.value;
	var question5 = document.quiz5.question5.value;
	var question6 = document.quiz5.question6.value;
	var question7 = document.quiz5.question7.value;
	var question8 = document.quiz5.question8.value;
	var question9 = document.quiz5.question9.value;
	var question10 = document.quiz5.question10.value;
	var correct = 0;

    if (question1 == "drew") {
		correct++;
}
	if (question2 == "eat") {
		correct++;
}	
	if (question3 == "shake") {
		correct++;
}
	if (question4 == "taken") {
		correct++;
}
	if (question5 == "wake") {
		correct++;
}	
	if (question6 == "fell") {
		correct++;
}
	if (question7 == "begun") {
		correct++;
}
	if (question8 == "forgotten") {
		correct++;
}	
	if (question9 == "gave") {
		correct++;
}
	if (question10 == "done") {
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