
function check (){
	
	var question1 = document.test.question1.value;
	var question2 = document.test.question2.value;
	var question3 = document.test.question3.value;
	var question4 = document.test.question4.value;
	var question5 = document.test.question5.value;
	var question6 = document.test.question6.value;
	var question7 = document.test.question7.value;
	var question8 = document.test.question8.value;
	var question9 = document.test.question9.value;
	var question10 = document.test.question10.value;
	var question11 = document.test.question11.value;
	var question12 = document.test.question12.value;
	var question13 = document.test.question13.value;
	var question14 = document.test.question14.value;
	var question15 = document.test.question15.value;
	var question16 = document.test.question16.value;
	var question17 = document.test.question17.value;
	var question18 = document.test.question18.value;
	var question19 = document.test.question19.value;
	var question20 = document.test.question20.value;
	var question21 = document.test.question21.value;
	var question22 = document.test.question22.value;
	var question23 = document.test.question23.value;
	var question24 = document.test.question24.value;
	var question25 = document.test.question25.value;
	var question26 = document.test.question26.value;
	var question27 = document.test.question27.value;
	var question28 = document.test.question28.value;
	var question29 = document.test.question29.value;
	var question30 = document.test.question30.value;
	var question31 = document.test.question31.value;
	var question32 = document.test.question32.value;
	var question33 = document.test.question33.value;
	var question34 = document.test.question34.value;
	var question35 = document.test.question35.value;
	var question36 = document.test.question36.value;
	var question37 = document.test.question37.value;
	var question38 = document.test.question38.value;
	var question39 = document.test.question39.value;
	var question40 = document.test.question40.value;
	var question41 = document.test.question41.value;
	var question42 = document.test.question42.value;
	var question43 = document.test.question43.value;
	var question44 = document.test.question44.value;
	var question45 = document.test.question45.value;
	var question46 = document.test.question46.value;
	var question47 = document.test.question47.value;
	var question48 = document.test.question48.value;
	var question49 = document.test.question49.value;
	var question50 = document.test.question50.value;

	var correct = 0;
	

    if (question1 == "your") {
		correct++;
}
	if (question2 == "from") {
		correct++;
}	
	if (question3 == "very") {
		correct++;
	}
	if (question4 == "Have you got") {
		correct++;
}
	if (question5 == "doesn't") {
		correct++;
}	
	if (question6 == "weren't") {
		correct++;
	}
	if (question7 == "did") {
		correct++;
}
	if (question8 == "are you") {
		correct++;
}	
	if (question9 == "are you going") {
		correct++;
	}
	if (question10 == "I've") {
		correct++;
	}
	if (question11 == "are made") {
		correct++;
	}
	if (question12 == "was he living") {
		correct++;
	}
	if (question13 == "I see him") {
		correct++;
	}
	if (question14 == "have you been doing") {
		correct++;
	}
	if (question15 == "has been") {
		correct++;
	}
	if (question16 == "used to") {
		correct++;
	}
	if (question17 == "wasn't married") {
		correct++;
}
	if (question18 == "interested") {
		correct++;
}	
	if (question19 == "needn't") {
		correct++;
	}
	if (question20 == "might") {
		correct++;
	}
	if (question21 == "Smoking") {
		correct++;
	}
	if (question22 == "wouldn't have") {
		correct++;
	}
	if (question23 == "has been") {
		correct++;
	}
	if (question24 == "won't shout") {
		correct++;
	}
	if (question25 == "he'll have left") {
		correct++;
	}
	if (question26 == "might have been") {
		correct++;
	}
	if (question27 == "to buy") {
		correct++;
}
	if (question28 == "would run") {
		correct++;
}	
	if (question29 == "the car industry") {
		correct++;
	}
	if (question30 == "in order to") {
		correct++;
	}
	if (question31 == "to see") {
		correct++;
	}
	if (question32 == "am not used to") {
		correct++;
	}
	if (question33 == "did") {
		correct++;
	}
	if (question34 == "have my hair cut") {
		correct++;
	}
	if (question35 == "rather") {
		correct++;
	}
	if (question36 == "is getting on") {
		correct++;
	}
	if (question37 == "mind having") {
		correct++;
}
	if (question38 == "off") {
		correct++;
}	
	if (question39 == "come across") {
		correct++;
	}
	if (question40 == "gave up") {
		correct++;
	}
	if (question41 == "is") {
		correct++;
}
	if (question42 == "Who") {
		correct++;
}	
	if (question43 == "was") {
		correct++;
	}
	if (question44 == "will be") {
		correct++;
}
	if (question45 == "There are") {
		correct++;
}	
	if (question46 == "are there") {
		correct++;
	}
	if (question47 == "hasn't") {
		correct++;
}
	if (question48 == "does") {
		correct++;
}	
	if (question49 == "Did Mary go") {
		correct++;
	}
	if (question50 == "speaks") {
		correct++;
	}
	
	var messages = ["Great job!", "That's just okay", "You really need to do better"];
	var score;
	
	if (correct < 30) {
		score = 2;
	}
	
	if (correct > 29 && correct <40){
		score = 1;
	}
	
	if (correct > 39) {
		score = 0;
	}
	
	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("message").innerHTML = messages[score];
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
}