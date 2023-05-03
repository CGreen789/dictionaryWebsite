/* 
A dictionary page that allows users to find a random word from the dictionary API
*/

async function getRandomWordAPI() {
  let response = await fetch("https://random-word-api.herokuapp.com/word");
  let data = await response.json();
  console.log(data[0]);
  let randomWord = data[0];
  return randomWord;
}

async function getDictionaryAPI(randomWord) {
  const response = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${randomWord}`
  );
  const data = await response.json();
  let definition = data[0].meanings[0].definitions[0].definition;
  return definition;
}

// show the randomWord in the p tag with id of randomWord
const pRandomWord = document.getElementById("random-word");

const pRandomWordDefinition = document.getElementById("definition");

// on button click, show a random word in the p tag with id of random-word
const button = document.getElementById("random-word-button");
button.addEventListener("click", async () => {
  pRandomWord.innerHTML = await getRandomWordAPI();
  pRandomWordDefinition.innerHTML = await getDictionaryAPI(
    pRandomWord.innerHTML
  );
});
