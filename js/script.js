// Assignment 2, Part 1

// 1.	Create an application that prompts the user for their name. Then, find the length of characters in the person’s name.  Use the alert method to display the result.

//var fullName = window.prompt("Please enter your full name:");
//window.alert(fullName.length);

// 2.	Create an application that prompts the user for their name. Then, prompt the user for a numeric value so that they can find the letter in the string based on the number they specify. Use the alert method to display the result.

//var fullName = window.prompt("Please enter your full name:");
//var numComp =  window.prompt("Guess a number between 0 and 22:");
//window.alert(fullName.charAt(numComp));

// 3.	Create an application that prompts the user for their first name. Then, prompt the user for their last name using a second prompt. Use the alert method to display the text "Your name is: " along with the result of the first name and last name concatenated together. You will use a concatenation operator to concatenate the literal string with the result of the String object method’s result.

//var firstName = window.prompt("Enter your first name:");
//var lastName = window.prompt("Enter your last name:");
//window.alert("Your name is " + firstName + " " + lastName);

// 4.	Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. Then, find and display within an alert the index of the word “fox”.

//var mySentence = "The quick brown fox jumps over the lazy dog";
//window.alert(mySentence.indexOf("fox"));

// 5.	Create an application that stores the text “The quick brown fox jumps over the lazy fox” within a variable. Then, find and display within an alert the index of the last instance of the word “fox”.

//var mySentence = "The quick brown fox jumps over the lazy fox";
//window.alert(mySentence.lastIndexOf("fox"));

// 6.	Create an application that stores the text “The quick brown fox jumped over the lazy dog” within a variable. Then, prompt the user for their full name. Then, replace the text “the lazy dog” in the variable with the name that the user enters within the prompt. Use the alert method to display the result.

//var mySentence = "The quick brown fox jumps over the lazy dog";
//var fullName = window.prompt("Please enter your full name:");
//window.alert(mySentence.replace("the lazy dog", fullName));

// 7.	Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. Then, prompt the user for a word. Next, search for the word within the string that the user enters into the prompt. Use the alert method to display the result.

//var mySentence = ("The quick brown fox jumps over the lazy dog");
//var aWord = window.prompt("Please enter a word:");
//window.alert(mySentence.search(aWord));

// 8.	Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable called old_string. Then, use slice(), substr(), or substring() to extract the words “the lazy dog” from the old_string variable and store that result in a second variable called new_string. Use the alert method to display the uppercase result of new_string.

//var old_string = "The quick brown fox jumps over the lazy dog";
//var new_string = old_string.slice(30, 43);
//window.alert(new_string.toUpperCase());

// 9.	Create an application that stores the text “            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ” within a variable. Make sure to add space before and after the text so that appears very similar to the text here. Use the alert method to display the lowercase result of the variable once the space has been trimmed off.

//var mySentence = "      THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG      ";
//var newSentence = mySentence.trim();
//window.alert(newSentence.toLowerCase());

// 10.	Create an application that stores the text “the quick brown fox jumps over the lazy dog” within a variable. The user clearly forgot to capitalize the first letter in the sentence. Programmatically capitalize the first letter in the sentence and display the result in an alert.

//var mySentence = "the quick brown fox jumps over the lazy dog";
//window.alert(mySentence.replace("the quick", "The quick"));


// Assignment 2, Part 2

// Math and Math Functions
// 1.	Create an application that prompts the user for a number. Regardless of whether they enter a negative or positive number, make sure to display the positive version of that number in the console window. If I enter -15 in the prompt and -15 is displayed in the console window, you did this one wrong.

//var guess = window.prompt("Please enter a number:");
//window.console.log(Math.abs(guess));

// 2.	Create an application that prompts the user for a floating point value (decimal). Store the result of that input in a variable and then round it up to the nearest whole number. Display the result within a console window.

//var decGuess = window.prompt("Please enter a decimal number");
//window.console.log(Math.ceil(decGuess));

// 3.	Create an application that prompts the user for a floating point value (decimal). Store the result of that input in a variable and then round it down to the nearest whole number. Display the result within a console window.

//var decGuess = window.prompt("Please enter a decimal number");
//window.console.log(Math.floor(decGuess));

// 4.	Create an application that prompts the user for 5 numbers. Ask them to comma delimit each number so you get 1,2,3,4,5 for example. Store the result of that input in a variable and then find the largest and smallest numbers in that list. Display both of those numbers within a console window.

//var g1 = Number(window.prompt("Please enter the first of 5 numbers"));
//var g2 = Number(window.prompt("Please enter the second of 5 numbers"));
//var g3 = Number(window.prompt("Please enter the third of 5 numbers"));
//var g4 = Number(window.prompt("Please enter the fourth of 5 numbers"));
//var g5 = Number(window.prompt("Please enter the fifth of 5 numbers"));
//window.console.log(Math.max(g1, g2, g3, g4, g5));
//window.console.log(Math.min(g1, g2, g3, g4, g5));

// 5.	Create an application that prompts the user for a number. Now find the square root of that number and display the result within a console window. 

//var guess = window.prompt("Please enter a number:");
//window.console.log(Math.sqrt(guess));

// Date and Date Functions

// 6.	Create an application that gets the current date. Display that result within the console window.

//var myDate = new Date();
//window.console.log(myDate.toDateString());

// 7.	Create an application that gets the number of days in a month. Display that result within the console window.

//var myDate = new Date();
//var theMonth = myDate.getMonth();
//
//switch (theMonth) {
//    case 0:
//        window.console.log("This is January, there are 31 days in this month");
//        break;
//    case 1:
//        window.console.log("This is February, there are 28 days in this month, unless it is leap year, then there are 29 days.");
//		break;
//    case 2:
//        window.console.log("This is March, there are 31 days in this month");
//        break;
//    case 3:
//        window.console.log("This is April, there are 30 days in this month.");
//		break;
//    case 4:
//        window.console.log("This is May, there are 31 days in this month");
//        break;
//    case 5:
//        window.console.log("This is June, there are 30 days in this month.");
//		break;
//    case 6:
//        window.console.log("This is July, there are 31 days in this month");
//        break;
//    case 7:
//        window.console.log("This is August, there are 31 days in this month.");
//		break;
//    case 8:
//        window.console.log("This is September, there are 30 days in this month");
//        break;
//    case 9:
//        window.console.log("This is October, there are 31 days in this month.");
//		break;
//    case 10:
//        window.console.log("This is November, there are 30 days in this month");
//        break;
//    case 11:
//        window.console.log("This is December, there are 31 days in this month.");
//		break;
//    default:
//        alert("You didn't pick a correct month!");
//}

// 8.	Create an application that gets the month name from a particular date. Display that result within the console window.

//var myDate = new Date();
//var theMonth = myDate.getMonth();
//
//switch (theMonth) {
//    case 0:
//        window.console.log("This is January");
//        break;
//    case 1:
//        window.console.log("This is February");
//		break;
//    case 2:
//        window.console.log("This is March");
//        break;
//    case 3:
//        window.console.log("This is April");
//		break;
//    case 4:
//        window.console.log("This is May");
//        break;
//    case 5:
//        window.console.log("This is June");
//		break;
//    case 6:
//        window.console.log("This is July");
//        break;
//    case 7:
//        window.console.log("This is August");
//		break;
//    case 8:
//        window.console.log("This is September");
//        break;
//    case 9:
//        window.console.log("This is October");
//		break;
//    case 10:
//        window.console.log("This is November");
//        break;
//    case 11:
//        window.console.log("This is December");
//		break;
//    default:
//        alert("You didn't pick a correct month!");
//}

// 9.	Create an application that tests whether a date is a weekend. Display that result within the console window.

//var myDate = new Date();
//var theDay = myDate.getDay();
//
//switch (theDay) {
//case 0:
//    window.console.log("This is Sunday, it IS the WEEKEND");
//    break;
//case 1:
//    window.console.log("This is Monday");
//	break;
//case 2:
//    window.console.log("This is Tuesday");
//    break;
//case 3:
//    window.console.log("This is Wednesday");
//	break;
//case 4:
//    window.console.log("This is Thursday");
//    break;
//case 5:
//    window.console.log("This is Friday");
//	break;
//case 6:
//    window.console.log("This is Saturday, it IS the WEEKEND");
//    break;
//default:
//    window.alert("You didn't pick a correct day!");
//}

// 10.	Create an application that gets yesterday’s day of the week. For instance, if today is Tuesday, the console window should display Monday. 

//var myDate = new Date();
//var oneDatMS = 1000 * 60 * 60 * 24;
//var diffDate = myDate - oneDatMS;
//var yDate = new Date(diffDate);
//var theDay = yDate.getDay();
//
//switch (theDay) {
//case 0:
//    window.console.log("Yesterday was Sunday, it IS the WEEKEND");
//    break;
//case 1:
//    window.console.log("Yesterday was Monday");
//	break;
//case 2:
//    window.console.log("Yesterday was Tuesday");
//    break;
//case 3:
//    window.console.log("Yesterday was Wednesday");
//	break;
//case 4:
//    window.console.log("Yesterday was Thursday");
//    break;
//case 5:
//    window.console.log("Yesterday was Friday");
//	break;
//case 6:
//    window.console.log("Yesterday was Saturday, it IS the WEEKEND");
//    break;
//default:
//    window.alert("You didn't pick a correct day!");
//}

// 11.	Create an application that gets the current day of the week. The twist here is that I want only the first letter of the day. If today is Tuesday, the letter T should be displayed in the console window.

//var d = new Date();
//var fullDate = d.toString();
//window.console.log(fullDate.substring(0, 1));

// Conditional Logic and Looping Operations
//12.	Create an application that accepts two integers within two separate prompts. Then, display only the larger of the two within the console window.

//var a = Number(window.prompt("Please enter a number:"));
//var b = Number(window.prompt("Please enter another number:"));
//
//if (a > b) {
//    window.console.log(a + " is greater than " + b);
//} else if (b > a) {
//    window.console.log(b + " is greater than " + a);
//} else {
//    window.console.log("You picked the same number, try again")
//}

//13.	Create an application that records the marks for the following five students. Then, these marks are used to determine the corresponding grade. All 5 students and their grades should be displayed within the console window. 

//var marksUrsala = 80;
//var marksPaul = 77;
//var marksHenry = 88;
//var marksTabitha = 95;
//var marksLucy = 68;
//
//var marks = new Array(marksUrsala, marksPaul, marksHenry, marksTabitha, marksLucy);
//var names = new Array("Ursala", "Paul", "Henry", "Tabitha", "Lucy");
//var grade = new Array ();
//
//window.console.log("NAME\t", "GRADE");
//
//for (var i = 0; i < marks.length; i++) {
//    if (marks[i] >= 90) {
//        grade[i] = "A";
//    } else if (marks[i] < 90 && marks[i] >= 80) {
//        grade[i] = "B";
//    } else if (marks[i] < 80 && marks[i] >= 70) {
//        grade[i] = "C";
//    } else if (marks[i] < 70 && marks[i] >= 60) {
//        grade[i] = "D";
//    } else {
//        grade[i] = "F";
//    }    
//    
//    window.console.log(names[i] + "\t", grade[i]);
//}


// 14.	Create a JavaScript for loop that iterates from 1 to 15. Each iteration should check if the current number is odd or even, and display a message within the console window.

//for (var i = 1; i <= 15; i++) {
//	if (i % 2 == 0) {
//            window.console.log(i + " is an even number");
//        } else {
//            window.console.log(i + " is an odd number");
//        }
//};


// 15.	Create an application which iterates numbers from 1 to 100. For multiples of 3, print "Fizz" instead of the number and for multiples of 5, print "Buzz" instead of the number. For numbers which are multiples of both 3 and 5 print "FizzBuzz". This is a VERY common JavaScript interview question and you should know how to do this. You will need to take advantage of the modulus operator to accomplish this task.

//for (var i = 1; i <= 100; i++) {
//	if (i % 3 !== 0 && i % 5 !== 0) {
//            window.console.log(i);
//        } else if (i % 3 == 0 && i % 5 !== 0) {
//            window.console.log("Fizz");
//        } else if (i % 3 !== 0 && i % 5 == 0) {
//            window.console.log("Buzz");
//        } else if (i % 3 == 0 && i % 5 == 0) {
//            window.console.log("FizzBuzz");
//        }
//};

// The “Hitchhiker’s Guide to the Galaxy” Game

// 1.	Begin your application by asking the user if they’re ready to play your game. If they are, display the message “Awesome, our hero is waiting!”  If they’re not, display the message “Too bad, we’re going to play anyway because our hero desperately needs your help!” You will need to use the confirm box for this one and check for the Boolean result of clicking OK or Cancel.

//var ready = confirm("Press OK if you are you ready to start the game:");
//if (ready == true) {
//    document.write("Awesome, our hero is waiting!<br>");
//} else {
//    document.write("Too bad, we’re going to play anyway because our hero desperately needs your help!<br>");
//}

// 2.	Now, alert the user to the following scenario: “You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall…”

//document.write("<br>You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall…<br>");

// 3.	Then prompt the user with the following message: “Which direction would you like to head (please enter forward, left, or right).”

//var path = window.prompt("Which direction would you like to head (please enter forward, left, or right");


// 4.	Use a switch statement to check for the literal string values forward, left, and right. If they choose forward, display the message “You walk about 100 yards and safely make your way out of the cave.” If they choose left, display the message “Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown.” If they choose right, display the message “You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever.” If the user chooses anything other than those three values, display the message “The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option….loser.”

//switch (path) {
//    case "forward":
//        document.write("<br>You walk about 100 yards and safely make your way out of the cave.<br>");
//        break;
//    case "left":
//        document.write("<br>Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown.<br>");
//		break;
//    case "right":
//        document.write("<br>You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever.<br>");
//        break;
//    default:
//        document.write("<br>The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option….loser.<br>");
//}

// 5.	Finally, ask the user to rate your game on a scale of 1 to 10. If the feedback score is between 6 and 10, display the message “Thank you, we will continue to make improvements to the game!” If the feedback score is between 1 and 5, display the message “Whatever, you weren’t very good at this game anyway!”
//var rateGame = window.prompt("Please rate this game on a scale of 1 to 10:");
//if (isNaN(rateGame)  || rateGame > 10 || rateGame < 1) {
//    rateGame = 10;
//}
//if (rateGame >= 6 && rateGame <= 10) {
//    document.write("<br>Thank you, we will continue to make improvements to the game!");
//} else {
//    document.write("<br>Whatever, you weren’t very good at this game anyway!");
//}


// 6.	Before you evaluate the number that the user has entered, check to see if the user entered a valid numeric value between 1 and 10. If they don’t, default the value to 10 and proceed with the evaluation.


// The “Coin Flip” Game

// 1.	Begin your application by creating a variable called coinFlip and set it equal to a random number. You will have to use a Math method to get this number.
//var coinFlip = Math.random();

//var coinFlip = Math.round(Math.random());

// 2.	Prompt the user to select “Heads or Tails” and set the result to a new variable called choice.

//var choice = window.prompt("Select heads or tails:");

// 3.	Use a conditional to check the result of the coin flip. If it’s less than a certain number, it will be heads. If it’s greater than a certain number, it will be tails. 

//if (coinFlip < .5) {
//if (coinFlip) {
//    coinFlip = "heads";
//} else {
//    coinFlip = "tails"
//}


// 4.	If the result is heads and the user selects heads, display the following message within an alert: 
// The flip was heads and you chose heads...you win!

//if (choice == "heads" && coinFlip == "heads") {
//    window.alert("The flip was heads and you chose heads...you win!");
//} 

// 5.	If the result is heads and the user selects tails, display the following message within an alert: 
// The flip was heads but you chose tails...you lose!

//else if (choice == "tails" && coinFlip == "heads") {
//    window.alert("The flip was heads but you chose tails...you lose!");
//}

// 6.	If the result is tails and the user selects heads, display the following message within an alert: 
// The flip was tails but you chose heads...you lose!

//else if (choice == "heads" && coinFlip == "tails") {
//    window.alert("The flip was tails but you chose heads...you lose!");
//}


// 7.	If the result is tails and the user selects tails, display the following message within an alert: 

    
//8.	Use two Math methods to get a solid whole number on the coin flip. Modify the evaluation of the expression in your conditional so that it now checks for a Boolean result.

//Edits made above

// The “Coin Flip” Game Redux 

// 1.	Begin your application by declaring a variable called coinFlip. Do not assign the variable a number just yet.

//2.	Create a for loop that loops 10 times.

//3.	Within the for loop assign a randomly generated number to coinFlip. You will have to use a Math method to get this number. Also, make sure to round that number off so that you get either a 0 or 1 as the result.

//4.	Use a conditional to check the result of the coin flip. If it’s 0, write out “Heads” into the console window. If it’s 1, write out “Tails” into the console window. 

//var coinFlip;
//for (var i = 1; i <= 10; i++) {
//	coinFlip = Math.round(Math.random());
//    if (coinFlip) {
//        window.console.log("Heads");
//    } else {
//        window.console.log("Tails");
//    }
//}

// The “Coin Flip Streak” Game 

// 1.	Begin your application by declaring a variable called coinFlip. Do not assign the variable a number just yet.

//2.	Create a do while loop.

//3.	Within the do while loop assign a randomly generated number to coinFlip. You will have to use a Math method to get this number. Also, make sure to round that number off so that you get either a 0 or 1 as the result.

//4.	Use a conditional to check the result of the coin flip. If it’s 0, write out “Heads” into the console window. If it’s 1, write out “Tails” into the console window. 

//5.	Set the condition of the do while loop to end once the coinFlip becomes “Tails”.

//var coinFlip;
//do {
//    coinFlip = Math.round(Math.random());
//        if (coinFlip) {
//        window.console.log("Heads");
//    } else {
//        window.console.log("Tails");
//    }
//} while (coinFlip);

// Looping a Triangle 

// Write a loop that displays the following triangle within a console window:
// #
// ##
// ###
// ####
// #####
// ######
// #######

//var hash = "#";
//for (var i = 1; i <= 7; i++) {
//    window.console.log(hash);
//    hash += "#";
//    
//}


// Odd or Even? 

// Write a loop that will iterate from 0 to 15. For each iteration it will check if the current number is odd or even, and display a message in the console window. 


//for (var i = 0; i <= 15; i++) {
//	if (i % 2 == 0) {
//            window.console.log(i + " is an even number");
//        } else {
//            window.console.log(i + " is an odd number");
//        }
//};


























