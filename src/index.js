var wordInput = document.querySelector('.input-field')
var breakDownButton = document.querySelector('.break-down-btn')
var wordResult = document.querySelector('.word')

function getWord () {
  var getWordRequest = new XMLHttpRequest();
  getWordRequest.open('GET', 'https://wordwatch-api.herokuapp.com/api/v1/top_word'); 
  getWordRequest.setRequestHeader('Content-Type', 'application/json');
  getWordRequest.onload = function() {
    var response = JSON.parse(getWordRequest.responseText);
    var responseObj = response['word']
    var key = Object.keys(responseObj)
    var count = Object.values(responseObj)
    topWords(key, count)
  };
  getWordRequest.send();
};

function topWords(key, count) {
  var topWord = `<p class='top-word-1'> ${key}</p>
                 <p class='word-count-1'> ${count}</p>`
        
  wordResult.innerHTML = topWord
};

function addWord () {
  var input = wordInput.value
  var words = input.split(" ");
  words.forEach((word) => {
    var addWordRequest = new XMLHttpRequest();
    addWordRequest.open('POST', 'https://wordwatch-api.herokuapp.com/api/v1/words');
    addWordRequest.setRequestHeader('Content-Type', 'application/json');
    addWordRequest.onreadystatechange = function() {
      if (this.readyState === XMLHttpRequest.DONE && this.status === 201) {
        alert(`${word} added`);
      };
    };
    var wordObject = { word: { value: word }};
    var jsonString = JSON.stringify(wordObject);
    addWordRequest.send(jsonString)
  })
}

window.addEventListener('load', getWord);
breakDownButton.addEventListener('click', addWord);