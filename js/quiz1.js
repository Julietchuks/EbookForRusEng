
function check (){
	
	var question1 = document.quiz1.question1.value;
	var question2 = document.quiz1.question2.value;
	var question3 = document.quiz1.question3.value;
	var question4 = document.quiz1.question4.value;
	var question5 = document.quiz1.question5.value;
	var question6 = document.quiz1.question6.value;
	var question7 = document.quiz1.question7.value;
	var question8 = document.quiz1.question8.value;
	var question9 = document.quiz1.question9.value;
	var question10 = document.quiz1.question10.value;
	var question11 = document.quiz1.question11.value;
	var question12 = document.quiz1.question12.value;
	var question13 = document.quiz1.question13.value;
	var question14 = document.quiz1.question14.value;
	var question15 = document.quiz1.question15.value;

	var correct = 0;
	

    if (question1 == "an") {
		correct++;
}
	if (question2 == "a") {
		correct++;
}	
	if (question3 == "the") {
		correct++;
	}
	if (question4 == "a") {
		correct++;
}
	if (question5 == "a") {
		correct++;
}	
	if (question6 == "an") {
		correct++;
	}
	if (question7 == "the") {
		correct++;
}
	if (question8 == "the") {
		correct++;
}	
	if (question9 == "an") {
		correct++;
	}
	if (question10 == "the") {
		correct++;
	}
	if (question11 == "A lot of") {
		correct++;
	}
	if (question12 == "Two") {
		correct++;
	}
	if (question13 == "Ripe red") {
		correct++;
	}
	if (question14 == "Leather") {
		correct++;
	}
	if (question15 == "Foggy") {
		correct++;
	}
	
	
	var messages = ["Great job!", "That's just okay", "You really need to do better"];
	var score;
	
	if (correct < 9) {
		score = 2;
	}
	
	if (correct > 8 && correct <15){
		score = 1;
	}
	
	if (correct == 15) {
		score = 0;
	}
	
	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("message").innerHTML = messages[score];
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
}