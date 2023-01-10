//globals to confirm attempt #
var attempts = 0;

var correctWord = "stars";

window.onload = function() {
	g00.value = ""; g01.value = ""; g02.value = ""; g03.value = ""; g04.value = "";
	g10.value = ""; g11.value = ""; g12.value = ""; g13.value = ""; g14.value = "";
	g20.value = ""; g21.value = ""; g22.value = ""; g23.value = ""; g24.value = "";
	g30.value = ""; g31.value = ""; g32.value = ""; g33.value = ""; g34.value = "";
	g40.value = ""; g41.value = ""; g42.value = ""; g43.value = ""; g44.value = "";
	g50.value = ""; g51.value = ""; g52.value = ""; g53.value = ""; g54.value = "";
	attempts = 0;
	document.getElementById('g00').focus();

}

// TODO BACKSPACE FUNCTIONALITY AND PREVENT USER FROM GOING TO NEXT ATTEMPT

// function to auto move to next tab
function autotab(field, next) {
	if (field.value.length >= 1) {
		document.getElementById(next).focus();
	}
}

function checkInput() {

	var guess = "";
	var next = "";

	// get the respective guess for each attempt
	switch (attempts) {
		case 0:
			guess = [g00.value, g01.value, g02.value, g03.value, g04.value];
			next = 'g10';
			break;
		case 1:
			guess = [g10.value, g11.value, g12.value, g13.value, g14.value];
			next = 'g20';
			break;
		case 2:
			guess = [g20.value, g21.value, g22.value, g23.value, g24.value];
			next = 'g30';
			break;
		case 3:
			guess = [g30.value, g31.value, g32.value, g33.value, g34.value];
			next = 'g40';
			break;
		case 4:
			guess = [g40.value, g41.value, g42.value, g43.value, g44.value];
			next = 'g50';
			break;
		case 5:
			guess = [g50.value, g51.value, g52.value, g53.value, g54.value];
			next = 'none';
			break;
	}

	// TODO check if it is word. if Not, return a "try again" alert (do not increase attempts)
	// this is done "server" side even though we don't have a server atm. http://androidtech.com/html/wordnet-mysql-20.php
	


	// char by char comparison
	for (let i = 0; i < 5; i++) {
		var inputNum = "g".concat(attempts.toString(), i.toString())
		var inputVal = document.getElementById(inputNum);
		
		if (guess[i] == correctWord.charAt(i)) {
			// GOOD - highlight green
			inputVal.style.backgroundColor = "green";
		}
		else if (correctWord.indexOf(guess[i]) == -1) {
			// DNE - highlight gray 
			inputVal.style.backgroundColor = "gray";
		}
		else if (correctWord.indexOf(guess[i]) != -1) {
			// EXISTS - highlight yellow
			
			// TODO EXAMPLE: SSSSS 
			// ALL WILL BE YELLOW EXCEPT FOR LAST ONE (GREEN). IF IT IS IN CORRECT SPOT, DO NOT HIGHLIGHT YELLOW (UNLESS ALSO EXISTS IN A DIFFERENT SPOT)
			var correctIndex = correctWord.indexOf(guess[i]);
			if (guess[correctIndex] == correctWord.charAt(correctIndex)){
				// DO NOTHING, IT WILL BE MARKED GREEN
				inputVal.style.backgroundColor = "gray";
				continue			
			}
			
			
			else inputVal.style.backgroundColor = "#d9d47c";
			
			
		
		}
			continue;
	}
	// analyze each guess -- put at end here because I wanted to highlight all of them green first hehe
	if (guess.join('') == correctWord) {
		window.alert("yay")
		return true
	}
	attempts++;
	// max attempts reached
	if (attempts == 6) {
		window.alert("try again next time!");
	}
	else
		document.getElementById(next).focus();

}



