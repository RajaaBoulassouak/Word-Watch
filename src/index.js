var wordInput = document.querySelector('.input-field')
var breakDownButton = document.querySelector('.break-down-btn')

function addWord () {
  var word = wordInput.value
  debugger
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

breakDownButton.addEventListener('click', addWord);