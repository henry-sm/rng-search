chrome.omnibox.onInputStarted.addListener(function(){
  console.log("we're going to search"); //idk what this does but docs sai
});

chrome.omnibox.onInputEntered.addListener(function(text){
    fetch('./engines.json')
        .then(response => response.json())
        .then(data => {
        const arrayLength = data.search_engines.length;
        console.log(arrayLength);
        var nth = new Date().getTime()
        nth = nth% arrayLength
        chrome.tabs.update({url: 'https://www.'+data.search_engines[nth]+'?q='+text})
        })
        .catch(error => {
        console.error("Error fetching data:", error);
        });

});

chrome.omnibox.onInputChanged.addListener(function(text, suggest){

/*
  var suggestions = [];
  suggestions.push({ deletable: true, content: "https://www.google.com/search/?q=" + text, description: '(10^100) '+text });

  suggest(suggestions);
*/
});

