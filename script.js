var result = document.getElementById('result');
result.style.display = 'none';

var button = document.getElementById('submit');
button.addEventListener('click', startCount);


function startCount() {
  var input = document.getElementById('text').value;
  var totalWords = 0;
  var totalSpaces = 0;
  var totalSentences = 0;
  var averageWordsPerSentence = 0;

result.style.display = 'block';

  for (var i = 0; i < input.length; i++) {
    if(input[i] === '.' || input[i] === '?' || input[i] === '!' ) {
       totalSentences++;
    }
    else if(input[i] === ' ') {
      totalWords++;
      totalSpaces++;
      }
  }

  console.log(totalWords);
  document.getElementById('totalWords').innerHTML = totalWords + 1;
  console.log(totalSentences);
  document.getElementById('totalSentences').innerHTML = totalSentences;
  console.log(totalSpaces);
  document.getElementById('totalSpaces').innerHTML = totalSpaces;
  console.log(averageWordsPerSentence);
  document.getElementById('averageWordsPerSentence').innerHTML = parseInt((totalWords +1) / totalSentences);
}
