chrome.omnibox.onInputStarted.addListener(function(){
  console.log('event started...'); //idk what this does but docs said so
});

chrome.omnibox.onInputEntered.addListener(function(text){
    console.log(text);
  chrome.tabs.create({url: 'https://www.reddit.com/search/?q='+text})
});

chrome.omnibox.onInputChanged.addListener(function(text, suggest){


  var suggestions = [];
  suggestions.push({ deletable: true, content: "https://www.google.com/search/?q=" + text, description: '(10^100) '+text });
  suggestions.push({ deletable: true, content: "https://bing.com/search?q=" + text, description: '(bing Chilling) '+text });

  suggest(suggestions);
});

