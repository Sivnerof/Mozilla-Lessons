const quotePara = document.querySelector('section p');

let quoteJson;

getQuotes('quotes.json', populateJson);

let intervalID = window.setInterval(showQuote, 10000);

function getQuotes(url, callback) {
  let request = new XMLHttpRequest();
  request.open('GET', url);
  request.responseType = 'json';
  request.send();

  request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200) {
      callback(request.response);
    }
  };
}

function populateJson(response) {
  quoteJson = response;
}

function showQuote() {
  var random = Math.floor((Math.random()*25));
  quotePara.textContent = quoteJson[random].quote + ' -- ' + quoteJson[random].author;
}