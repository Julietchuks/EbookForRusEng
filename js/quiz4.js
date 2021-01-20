
function check (){
	
	var question1 = document.quiz4.question1.value;
	var question2 = document.quiz4.question2.value;
	var question3 = document.quiz4.question3.value;
	var question4 = document.quiz4.question4.value;
	var question5 = document.quiz4.question5.value;
	var correct = 0;
	

    if (question1 == "Abruptly") {
		correct++;
}
	if (question2 == "Gently") {
		correct++;
}	
	if (question3 == "Cheerfully") {
		correct++;
	}
	if (question4 == "Everywhere") {
		correct++;
}
	if (question5 == "Now") {
		correct++;
}	
	
	
	var messages = ["Great job!", "That's just okay", "You really need to do better"];
	var score;
	
	if (correct < 3) {
		score = 2;
	}
	
	if (correct > 2 && correct <5){
		score = 1;
	}
	
	if (correct == 5) {
		score = 0;
	}
	
	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	}