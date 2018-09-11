//Wather
const kelvin =0;
const celsius = kelvin -273;
let fahrenheit = celsius * (9/5) + 32;
fahrenheit = Math.floor (fahrenheit);
console.log (`The temperature ${fahrenheit} degrees fahrenheit`);
let newton = celsius * (33/100);
newton = Math.floor (newton);
console.log (`The temperature is ${newton} degrees Newton.`);


//Dog Years
const myAge = 30;
let earlyYears = 2;
earlyYears *= 10.5;
let laterYears = myAge - 2;
laterYears *= 4;
console.log(earlyYears);
console.log(laterYears);

let myAgeInDogYears = earlyYears + laterYears;
let myName = "Ivanka".toLowerCase();

console.log (`My name is ${myName}. I am ${myAgeInDogYears} years old in dog years.`);


//Magic Eight Ball
let userName = "Ivanka";
userName ? console.log (`Hello, ${userName}`):
console.log ("Hello!");
let userQuestion = "Can you answer my Question?";
console.log (`The user asked: ${userQuestion}`);
let randomNumber = Math.floor (Math.random()*8);
let eightBall = '';

switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
    case 1:
    eightBall = 'It is decidedly so';
    break;
    case 2:
    eightBall = 'Reply hazy, try again.';
    break;
    case 3:
    eightBall = "Can't predict now";
    break;
    case 4:
    eightBall = "Don't count on it";
    break;
    case 5:
    eightBall = 'My sourses say no';
    break;
    case 6:
      eightBall = 'Outlook not so good';
    break;
    case 7:
    eightBall = 'Signs point to yes';
    break;
    
}

console.log(eightBall);

//Race Day

let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let age = 30;

if (registeredEarly && age > 18) {
  raceNumber += 1000;
}

if (registeredEarly && age > 18) {
  console.log (`Race will begin at 9:30h, your race number is: ${raceNumber}.`);
}
else if (!registeredEarly && age > 18) {
  console.log (`Race will begin at 11h, your race number is: ${raceNumber}.`);
}
  
  else if (age < 18){
  console.log (`Race will begin at 12:30, your race number is: ${raceNumber}.`);
  }
    
    else {
      console.log ('Please approach the registration desk, thanks!');
    }


//Training Days

// The scope of `random` is too loose 
const random = Math.floor(Math.random() * 3);

const getRandEvent = () => {
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

// The scope of `days` is too tight 
const getTrainingDays = event => {
  let days;

  if (event === 'Marathon') {
    days = 50;
  } else if (event === 'Triathlon') {
    days = 100;
  } else if (event === 'Pentathlon') {
    days = 200;
  }

  return days;
};

// The scope of `name` is too tight 
const logEvent = event => {
  const name = 'Nala';
  console.log(`${name}'s event is: ${event}`);
};

const logTime = days => {
  const name = 'Nala';
  console.log(`${name}'s time to train is: ${days} days`);
};

const event = getRandEvent();
const days = getTrainingDays(event);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime 


logEvent(event);
logTime(days);


//Secret Message

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop ();

secretMessage.push ('to', 'Program')

secretMessage [7] = 'right'
secretMessage.shift ()


secretMessage.unshift ('Programming')

secretMessage.splice (6, 5, 'know,')
//console.log (secretMessage)

console.log (secretMessage.join(' '));



//Whale Talk

let phrase = 'turpentine and turtles';
let result = "";

for(let i = 0; i < phrase.length; i++){
 if(phrase[i] =="u" || phrase[i] =="e") {
   result += phrase[i]+phrase[i]; 
 } else if (phrase[i] =="a" || phrase[i] =="i" || phrase[i] =="o") {
   result += phrase[i];
 }
}

console.log(result.toUpperCase());



//Message Mixer
function countCharacter(inputString, inputCharacter) {
  let count = 0;
  let string = inputString.toLowerCase();
  let character = inputCharacter.toLowerCase();
    for (let i = 0; i < string.length; i++) {
      if (string[i] === character) {
         count++;
      }
    }
  return count; 
};

function capitalizeFirstCharacterOfWords(string) {
  let arr = string.split(" ");  
    for (let i = 0; i < arr.length; i++) {  
      let word = arr[i];
        arr[i] = word[0].toUpperCase() + word.substring(1); 
    }
  return arr.join(" "); 
};


function reverseWord(word) {
  return word.split("").reverse().join("");
};

function reverseAllWords(sentence) {
  let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = reverseWord(words[i]);
    }
   return words.join(" ");
};


function replaceFirstOccurence(string, toBeReplaced, replaceWith) {
  return string.replace(toBeReplaced, replaceWith);
};


function replaceAllOccurrences(string, toBeReplaced, replaceWith) {
  return string.split(toBeReplaced).join(replaceWith);
};

function encode(string) {
  let replacementObject = { "a": "@", "s": "$", "i": "!", "o":"0" };
    for (let key in replacementObject) {
      string = replaceAllOccurrences(string, key, replacementObject[key]); 
    }	
    return string;
};


function displayMessage() {
  console.log(countCharacter("What is the color of the sky?", "t"));
  console.log(capitalizeFirstCharacterOfWords("What is the color of the sky?"));
  console.log(reverseWord("What is the color of the sky?"));
  console.log(reverseAllWords("What is the color of the sky?"));
  console.log(replaceFirstOccurence("What is the color of the sky?", "sky", "water"));
  console.log(encode("What is the color of the sky?"));
}

displayMessage();
  
 

