// Assignment Code
const generateBtn = document.querySelector("#generate");


let rangeOfCharacters = "";

//adding a comment.
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  let passwordText = document.querySelector("#password");
  let generateButton = document.quearySelector("#generate");
  let clipboardButton = document.quearySelector("#clipboard")
  
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseLetters = "zyxwvutsrqponmlkjihgfedcba";
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
