// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
let length = document.querySelector('#length');
let lowercase = document.querySelector('#lowercase');
let uppercase = document.querySelector('#uppercase');
let numbers = document.querySelector('#numbers');
let specialCharacters = document.querySelector('#special-characters');
let copyBtn = document.querySelector('#copy');

// Add event listener to buttons
generateBtn.addEventListener("click", writePassword);

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
  let asciiCodes = generateAsciiCodes();
  let password = [];
  for (let i = 0; i < length.value; i++) {
    let asciiCode = Math.floor(Math.random() * asciiCodes.length);
    password.push(String.fromCharCode(asciiCodes[asciiCode]));
  }
  copyBtn.disabled = false;
  return password.join('');
}

// Error function for no selected character types
function handleError() {
  alert('You must select a character type');
}

// Function to create array of ASCII codes
function generateAsciiCodes() {
  let asciiCodes = [];
  if (lowercase.checked) {
    for (let i = 97; i <= 122; i++) {
      asciiCodes.push(i);
    }
  }
  if (uppercase.checked) {
    for (let i = 65; i <= 90; i++) {
      asciiCodes.push(i);
    }
  }
  if (numbers.checked) {
    for (let i = 48; i <= 57; i++) {
      asciiCodes.push(i);
    }
  }
  if (specialCharacters.checked) {
    let specialASCII = [33, 64, 35, 36, 37, 94, 38, 42];
    for (let i = 0; i < 8; i++) {
      asciiCodes.push(specialASCII[i]);
    }
  }
  return asciiCodes;
}

// Function to add copy text button to textarea
function copyPassword() {
  navigator.clipboard.writeText(passwordText.value);
}
