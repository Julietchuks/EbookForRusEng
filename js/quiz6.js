
function check (){
	
	var question1 = document.quiz6.question1.value;
	var question2 = document.quiz6.question2.value;
	var question3 = document.quiz6.question3.value;
	var question4 = document.quiz6.question4.value;
	var question5 = document.quiz6.question5.value;
	var question6 = document.quiz6.question6.value;
	var question7 = document.quiz6.question7.value;
	var question8 = document.quiz6.question8.value;
	var question9 = document.quiz6.question9.value;
	var question10 = document.quiz6.question10.value;
	var question11 = document.quiz6.question11.value;
	var question12 = document.quiz6.question12.value;
	var correct = 0;

    if (question1 == "Both/and") {
		correct++;
}
	if (question2 == "or") {
		correct++;
}	
	if (question3 == "yet (but)") {
		correct++;
}
	if (question4 == "either/or") {
		correct++;
}
	if (question5 == "yet (but)") {
		correct++;
}	
	if (question6 == "when") {
		correct++;
}
	if (question7 == "whether") {
		correct++;
}
	if (question8 == "unless") {
		correct++;
}	
	if (question9 == "If") {
		correct++;
}
	if (question10 == "so that") {
		correct++;
}
    if (question11 == "since") {
		correct++;
}
    if (question12 == "Because") {
		correct++;
}
	
	
	var messages = ["Great job!", "That's just okay", "You really need to do better"];
	var score;
	
	if (correct < 7) {
		score = 2;
	}
	
	if (correct > 6 && correct <12){
		score = 1;
	}
	
	if (correct == 12) {
		score = 0;
	}
	
	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	}