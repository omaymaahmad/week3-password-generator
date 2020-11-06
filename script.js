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


  return;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
