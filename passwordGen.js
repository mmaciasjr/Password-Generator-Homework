// Assignment Code
const generateBtn = document.querySelector("#generate");
const lengthSlider = document.getElementById('rangeOfCharacters');
const lengthInput = document.getElementById('characterAmountNumber');
const passwordText = document.querySelector("#password");
const generateButton = document.querySelector("#generate");
const clipboardButton = document.querySelector("#clipboard");
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specialCharacters = "!@#$%^&*()-+";

// adding a comment.
// Write password to the #password input
function writePassword() {
    passwordText.value = generatePassword();
}

// Need a random number generator
// - will use this for getting a random index for an array
function getRandomIndex(max) {
    // returns a number between 0 and max
    return Math.floor(Math.random() * Math.floor(max));
}

function getPasswordLength() {
    return lengthSlider.value; // could be either the editable field or the slider - choosing slider
}

function getAllowedCharacters() {
    let characters = '';

    const addUpperCaseInput = document.getElementById('addUppercase');
    if (addUpperCaseInput.checked) {
        characters = characters + uppercaseLetters;
    }

    const addLowerCaseInput = document.getElementById('addLowerCase');
    if (addLowerCaseInput.checked) {
        characters = characters + uppercaseLetters.toLowerCase();
    }

    const addSpecialCharactersInput = document.getElementById('symbols');
    if (addSpecialCharactersInput.checked) {
        characters = characters + specialCharacters;
    }

    const addNumericInput = document.getElementById('numbers');
    if (addNumericInput.checked) {
        characters = characters + numbers;
    }

    return characters;
}

function generatePassword() {
    const passwordLength = getPasswordLength();
    const characters = getAllowedCharacters();

    let password = '';
    for (let i = 0; i < passwordLength; i++) {
        const index = getRandomIndex(characters.length - 1);
        password = password + characters.charAt(index);
    }

    // Display the new generated password to the page
    return password;
}

function handleLengthSliderChanged(event) {
    lengthInput.value = event.target.value;
}

function handleLengthInputChanged(event) {
    lengthSlider.value = event.target.value;
}

// Add event listener to watch slider change to keep value in sync
lengthSlider.addEventListener('change', handleLengthSliderChanged);

// Add event listener to watch slider change to keep value in sync
lengthInput.addEventListener('change', handleLengthInputChanged);

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
