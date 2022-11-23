// Assignment Code
var generateBtn = document.querySelector("#generate");

var numCase = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var specialCase = ['(', ')', '@','^', '#','%', '&', '*',];
var comboArray = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  comboArray = [];

}

function getPasswordLength() {
    let amountCharacters = window.prompt("Please enter a password between 8-128 characters");

    if (amountCharacters > 128 || amountCharacters < 8) {
      window.alert("Password must be between 8-128 characters");


      return getPasswordLength()
    }
    return Number.parseInt(amountCharacters);
  
  }

  function getUpperCase() {
    let upperChoice = window.confirm("Do you want your password to have uppercase letters?");

    if (upperChoice) {
      return upperChoice
    }

    return null;
  }

  function getLowerCase() {
    let lowerChoice = window.confirm("Do you want your password to have lowercase letters?")
    if (lowerChoice) {
      return lowerChoice
    }
    return null;
  }

  function getSpecialCase() {
    let specialChoice = window.confirm("Do you want your password to have special characters?");

    if (specialChoice) {
      return specialChoice
    }
    return null;
  }

  function getNumCase() {
    let numChoice = window.confirm("Do you want your password to have numbers?");
    if (numChoice) {
      return numChoice
    }
    return null;
  }

  function generatePassword() {

    let password = "";
    let passwordLength = getPasswordLength();
    let hasUpperCase = getUpperCase();
    let hasLowerCase = getLowerCase();
    let hasSpecialCase = getSpecialCase();
    let hasNumCase = getNumCase();
  }

  if (hasUpperCase) {
    comboArray = comboArray.concat(UpperCase)
  }

  if (hasLowerCase) {
    comboArray = comboArray.concat(LowerCase)
  }

  if (hasSpecialCase) {
    comboArray = comboArray.concat(SpecialCase)
  }

  if (hasNumberCase) {
    comboArray = comboArray.concat(NumberCase)
  }

  for (let i = 0; i <passwordLength; i++) {
    let randomLetter = comboArray[randomNumber]
    let randomNumber = Math.floor(Math.random() * comboArray.length)
    password += randomLetter;
  }


  return password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);