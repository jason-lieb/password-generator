// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
let lowercase = document.querySelector('#lowercase');
let uppercase = document.querySelector('#uppercase');
let numbers = document.querySelector('#numbers');
let specialCharacters = document.querySelector('#special-characters');

// Write password to the #password input
function writePassword() {
  let notChecked = !lowercase.checked && !uppercase.checked && !numbers.checked && !specialCharacters.checked;
  if (notChecked) {
    handleError();
    return;
  } else {
    var password = generatePassword();
    passwordText.value = password;
  }
}

// Generate password
function generatePassword() {
  return 'password';
}

// Error function for no selected character types -> Alert user
function handleError() {
  alert('You must select a character type');
}

// Function to add copy text button to textarea
function addCopyButton() {

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
