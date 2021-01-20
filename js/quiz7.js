
function check (){
	
	var question1 = document.quiz7.question1.value;
	var question2 = document.quiz7.question2.value;
	var question3 = document.quiz7.question3.value;
	var question4 = document.quiz7.question4.value;
	var question5 = document.quiz7.question5.value;
	var question6 = document.quiz7.question6.value;
	var question7 = document.quiz7.question7.value;
	var question8 = document.quiz7.question8.value;
	var question9 = document.quiz7.question9.value;
	var question10 = document.quiz7.question10.value;
	var question11 = document.quiz7.question11.value;
	var question12 = document.quiz7.question12.value;
	var question13 = document.quiz7.question13.value;
	var question14 = document.quiz7.question14.value;
	var question15 = document.quiz7.question15.value;
	var question16 = document.quiz7.question16.value;
	var question17 = document.quiz7.question17.value;

	var correct = 0;

    if (question1 == "in") {
		correct++;
}
	if (question2 == "in") {
		correct++;
}	
	if (question3 == "in") {
		correct++;
	}
	if (question4 == "at") {
		correct++;
}
	if (question5 == "on") {
		correct++;
}	
	if (question6 == "for") {
		correct++;
	}
	if (question7 == "to") {
		correct++;
}
	if (question8 == "to") {
		correct++;
}	
	if (question9 == "for") {
		correct++;
	}
	if (question10 == "for") {
		correct++;
	}
	if (question11 == "of") {
		correct++;
	}
	if (question12 == "by") {
		correct++;
	}
	if (question13 == "over") {
		correct++;
	}
	if (question14 == "with") {
		correct++;
	}
	if (question15 == "by") {
		correct++;
	}
	if (question16 == "over") {
		correct++;
	}
	if (question17 == "with") {
		correct++;
	}
	
	
	var messages = ["Great job!", "That's just okay", "You really need to do better"];
	var score;
	
	if (correct < 11) {
		score = 2;
	}
	
	if (correct > 10 && correct <17){
		score = 1;
	}
	
	if (correct == 17) {
		score = 0;
	}
	
	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("message").innerHTML = messages[score];
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
}