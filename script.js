// Array of special characters to be included in password
let specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
let lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
let upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Prompt to get password length
let passwordLength = prompt("How long would you like your password? (10 - 64 characters)");
let passwordInt = parseInt(passwordLength);

console.log(passwordInt);

// Data validation to ensure password length is a number
while (isNaN(passwordInt)) {
  passwordLength = prompt("Try again, how long would you like your password? (10 - 64 characters)")
  passwordInt = parseInt(passwordLength);
}

// Data validation on password length
while (passwordInt < 10 || passwordInt > 64) {
  passwordInt = prompt("Try again, how long would you like your password? (10 - 64 characters)")
} 

console.log(passwordInt);

// Object for other password options
let passwordOptions = [
  {
    name: lowerCasedCharacters,
    required: prompt("Would you like lowercase characters? Y or N").toUpperCase()
  },
  {
    name: upperCasedCharacters,
    required: prompt("Would you like uppercase characters? Y or N").toUpperCase()
  },
  {
    name: numericCharacters,
    required: prompt("Would you like numeric characters? Y or N").toUpperCase()
  },
  {
    name: specialCharacters,
    required: prompt("Would you like special characters? Y or N").toUpperCase()
  }
]

console.log(passwordOptions);

// Data validation to ensure Y or N selected on other password options
while (passwordOptions[0].required !== "Y" && passwordOptions[0].required !== "N" ) {
  passwordOptions[0].required = prompt("Try again, would you like lowercase characters? Y or N")
}
while (passwordOptions[1].required !== "Y" && passwordOptions[1].required !== "N" ) {
  passwordOptions[1].required = prompt("Try again, would you like uppercase characters? Y or N")
}
while (passwordOptions[2].required !== "Y" && passwordOptions[2].required !== "N" ) {
  passwordOptions[2].required = prompt("Try again, would you like numeric characters? Y or N")
}
while (passwordOptions[3].required !== "Y" && passwordOptions[3].required !== "N" ) {
  passwordOptions[3].required = prompt("Try again, would you like special characters? Y or N")
}

console.log(passwordOptions);




let p = passwordOptions.filter(function(i) {
  return i.required == "Y"
})

console.log(p); 


console.log(p.length);



let p10 = "";

  if (p.length === 1) {
    p10 = p[0].name;
  } else if (p.length === 2) {
    p10 = p[0].name.concat(p[1].name);
  } else if (p.length === 3) {
    p10 = p[0].name.concat(p[1].name, p[2].name);
  } else {
    p10 = p[0].name.concat(p[1].name, p[2].name, p[3].name);
  }

console.log(p10);
console.log(p10.length);



// let randomIndex = Do random number for length of lowercasedcharacters 
// lowerCasedCharacters[randomIndex]

// For what user selects what characters, concantanate the strings then do random character from new string
console.log(p10);

// let randomIndex = Math.floor(Math.random() * p10.length);
// let randomCharacter = console.log(p10[randomIndex]);



// Function for getting a random element from an array
function getRandom() {
  let randomIndex = Math.floor(Math.random() * p10.length)
  return p10[randomIndex]
}



// Function to generate password with user input
function generatePassword() {
  let practicePassword = "";
  for (let i = 0; i < passwordInt; i++) {
    
    practicePassword += getRandom()
    console.log(practicePassword);
  }

  return practicePassword;
  
  }
  
generatePassword();





// Get references to the #generate element
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);