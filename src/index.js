var wordInput = document.querySelector('.input-field')


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
  var wordObject = {"word": { "value": "sample" }};
  var wordString = JSON.stringify(wordObject);
  addWordRequest.send(jsonString)
}