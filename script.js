let arrayWords = [];

function saveWord() {
  let name = document.getElementById('inputVal').value
  arrayWords.push(name);
}

function searchWord() {
  let word = document.getElementById('inputVal').value
  for(i in arrayWords){
    if(word === arrayWords[i]){
      document.getElementById('wordRevealed').innerHTML = word + " is in the dictionary"
       break;
    }else{
      document.getElementById('wordRevealed').innerHTML = "This word does not exist in the dictionary";
    }
  }
}