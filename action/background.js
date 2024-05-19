chrome.omnibox.onInputChanged.addListener((text, suggest) => {
  if (text.startsWith('${chrome.omnibox.keyword} ')){
    suggest([{
        content: `${chrome.omnibox.keyword} ${userQuery}`,
        description: `So you want to search for "${userQuery}"`
    }])
  }  
});
