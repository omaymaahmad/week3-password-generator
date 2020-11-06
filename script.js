// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "1234567890";
  var specialChar = "!@£$%^&*";

  var lengthOfRequestedPassword = prompt('What length would you like you password?')
  var lengthRequestedNumber = parseInt(lengthOfRequestedPassword); 

  if (lengthRequestedNumber < 8 || lengthRequestedNumber > 128){
    alert('Abide by the rules: More than 8 - Less than 128');
  }

  var useUpperLetters = confirm('Would you like Upper Letters?')
var useLowerLetters = confirm('Would you like to use Lower Letters?')
var useNumbers = confirm('Would you like to use numbers?')
var useSpecialChar = confirm('Would you like to use Special Characters')

if(useLowerLetters === false && useUpperLetters === false && useNumbers === false && useSpecialChar === false){
  alert('You need to select something to add....')
}

var password = ''; 
var possiblePasswordCharacters = '';

if(useUpperLetters === true){
  var randomUpperLetter = upperLetters[Math.floor(Math.random() * 26)];
  password += randomUpperLetter;

  possiblePasswordCharacters += upperLetters;
}

if(useLowerLetters === true){
  var randomLowerLetter = lowerLetters[Math.floor(Math.random() * 26)];
  password += randomLowerLetter;

  possiblePasswordCharacters += lowerLetters;
}

if(useNumbers === true){
  var randomNumber = numbers[Math.floor(Math.random() * 10)];
  password += randomNumber;

  possiblePasswordCharacters += numbers;
}

if(useSpecialChar === true){
  var randomSpecial = specialChar[Math.floor(Math.random() * 8)];
  password += randomSpecial;

  possiblePasswordCharacters += specialChar;
}

while (password.length < lengthRequestedNumber){
  var randomCharacter = possiblePasswordCharacters[Math.floor(Math.random() * possiblePasswordCharacters.length)];
  password += randomCharacter;
}


  return password;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
