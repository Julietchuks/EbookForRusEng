
function check(){
	
	var question1 = document.dic1.question1.value;
	var question2 = document.dic1.question2.value;
	var question3 = document.dic1.question3.value;
	var question4 = document.dic1.question4.value;
	var question5 = document.dic1.question5.value;
	var question6 = document.dic1.question6.value;
	var question7 = document.dic1.question7.value;
	var question8 = document.dic1.question8.value;
	var question9 = document.dic1.question9.value;
	var question10 = document.dic1.question10.value;
	var correct = 0;
	

    if (question1 == "restaurant") {
		correct++;
}
	if (question2 == "universities") {
		correct++;
}	
	if (question3 == "emotion") {
		correct++;
	}
	if (question4 == "mistakes") {
		correct++;
}
	if (question5 == "apartment") {
		correct++;
}	
	if (question6 == "jacket") {
		correct++;
	}
	if (question7 == "laptop") {
		correct++;
}
	if (question8 == "bedroom") {
		correct++;
}	
	if (question9 == "professor") {
		correct++;
	}
	if (question10 == "scholarship") {
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
	