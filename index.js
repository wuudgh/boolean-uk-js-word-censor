const text = "Lorem, ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const listOfCensoredWords = ['amet',  'elit', 'eiusmod', 'tempor'] 

const wordArray = text.split(' ');
//console.log(listOfCensoredWords);
//console.log(wordArray);

for (let i = 0; i < wordArray.length; i++) {
  for ( let p = 0; p < listOfCensoredWords.length; p++) {
    const checkWord = wordArray[i].replace(",", "");
    if (checkWord === listOfCensoredWords[p]){

      wordArray[i] = "*****" 
      
    }
  }
}




console.log(wordArray);
/*
function censor(censoredWords) {
  for (i = 0; i < censoredWords.length; i++) {
    let listOfCensoredWords =  'amet elit eiumod tempor';
    let  = text.replace('amet', 'BEEP');
    console.log(censoredWords)
    }
  
   console.log('word: ' + censoredWords[i] + ' is included in text: ' + text.includes(censoredWords[i]))
   console.log(listOfCensoredWords)
  }; 


censor(text, listOfCensoredWords);
*/