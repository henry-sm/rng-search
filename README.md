# RNG Search Engine

Randomizes the search engine used when a query is inserted into address bar of a browser window.
Trigger the extension by using the keyword rng, this triggers an omnibox (probably needs a better phrasing; based on my understanding of by the docs) where you can type what you want to search.
This then picks up a search engine from a variety of search engines stored in a json and updates the URL to that of the search query made.

The "random" part of it using the remainder of current time in milliseconds divided by the length of the array of search engines to access a particular search engine.
Given that there are 7 search engines currently stored in the json, the cycling between them is fast enough (7 milliseconds) to provide an illusion of randomness.


Future scope of the project if possible shall include adding an interactable menu in the popup page to add/remove search engines of the user's choice rather than directly modifying the json file.

