var wordInput = document.querySelector('.input-field')
var breakDownButton = document.querySelector('.break-down-btn')

function getWord () {
  var getWordRequest = new XMLHttpRequest();
  getWordRequest.open('GET', 'https://wordwatch-api.herokuapp.com/api/v1/top_word'); 
  getWordRequest.setRequestHeader('Content-Type', 'application/json');
  getWordRequest.onload = function() {
    var response = JSON.parse(getWordRequest.responseText);
    console.log(response['word']);
  };
  getWordRequest.send();
};

function addWord () {
  var word = wordInput.value
  var addWordRequest = new XMLHttpRequest();
  addWordRequest.open('POST', 'https://wordwatch-api.herokuapp.com/api/v1/words');
  addWordRequest.setRequestHeader('Content-Type', 'application/json');
  addWordRequest.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 201) {
      alert(`${word} added`);
    };
  };
  var wordObject = { "word": { "value": `${word}` }};
  addWordRequest.send(wordObject)
}

window.addEventListener('load', getWord);
breakDownButton.addEventListener('click', addWord);