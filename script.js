// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialList = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?", "/", "-", ":", ";", "[", "]", "{", "}", ".", "<", ">", "=", "_", "`", "|", "~"];
var selectArray = [];

var passLength = getLength();

var type = false;

while (type == false) {
    var lowerCase = getChoice("lowercase");
    var upperCase = getChoice("uppercase");
    var numericCharacters = getChoice("numeric");
    var specialCharacters = getChoice("special");
    if ((lowerCase) || (upperCase) || (numericCharacters) || (specialCharacters)) {
      charTypeSelected = true;
    } 
    else {
      window.alert("You must select at least one character type.")
    }
  }

if (lowerCase) {
    selectArray = selectArray.concat(lowerCase);
  }
if (upperCase) {
    selectArray = selectArray.concat(upperCase);
  }
if (numericCharacters) {
    selectArray = selectArray.concat(numList);
  }
if (specialCharacters) {
    selectArray = selectArray.concat(specialList);
  }

  var passString = "";
  // This loop will take array, and randomly select elements
  for (var i = 0; i < passLength; i++) {
    passString += selectArray[Math.floor(Math.random() * (selectArray.length))];
  }

  return passString;
}

function getLength() {
    var userChoice = 0;
    while ((userChoice > 8) || (userChoice < 128)) {
      userChoice = parseInt(window.prompt("Enter the number of characters between 8 and 128: "));
  
      // Check entered a number
      if (isNaN(userChoice)) {
        // This will reset the choice value to 0 so it can restart the loop if the user entered anything besides a number.
        userChoice = 0;
      }
        else {
            confirmNum = confirm("Will this contain numbers?");
            confirmSpecial = confirm("Will this contain special characters?");
            confirmUppercase = confirm("Will this contain Uppercase letters?");
            confirmLowercase = confirm("Will this contain Lowercase letters?");
        }
    }
  
    return userChoice;

}

function getChoice(currentOption) {
    var userChoice = "a",
      messagePrompt = "";
    var messagePrompt = ('Would you like '.concat(currentOption));
    messagePrompt = messagePrompt.concat(' characters (y/n)?');

    while (userChoice = "a") {
      userChoice = (window.prompt(messagePrompt));
      userChoice = userChoice.toLowerCase();
      if (userChoice == "y") {
        return true;
      } else if (userChoice == "n") {
        return false;
      }
    }
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passText = document.querySelector("#password");
  
    passText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
