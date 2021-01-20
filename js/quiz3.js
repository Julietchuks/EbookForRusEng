
function check (){
	
	var question1 = document.quiz3.question1.value;
	var question2 = document.quiz3.question2.value;
	var question3 = document.quiz3.question3.value;
	var question4 = document.quiz3.question4.value;
	var question5 = document.quiz3.question5.value;
	var question6 = document.quiz3.question6.value;
	var question7 = document.quiz3.question7.value;
	var question8 = document.quiz3.question8.value;
	var question9 = document.quiz3.question9.value;
	var question10 = document.quiz3.question10.value;
	var correct = 0;

    if (question1 == "were") {
		correct++;
}
	if (question2 == "has") {
		correct++;
}	
	if (question3 == "did") {
		correct++;
}
	if (question4 == "didn't") {
		correct++;
}
	if (question5 == "is") {
		correct++;
}	
	if (question6 == "doesn't") {
		correct++;
}
	if (question7 == "didn't") {
		correct++;
}
	if (question8 == "don't") {
		correct++;
}	
	if (question9 == "were") {
		correct++;
}
	if (question10 == "hasn't") {
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