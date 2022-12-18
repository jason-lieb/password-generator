// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Generate password
function generatePassword() {
  return 'password';
}

// Error function for no selected character types -> Alert user
function handleError() {

}

// Function to add copy text button to textarea
function addCopyButton() {

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
