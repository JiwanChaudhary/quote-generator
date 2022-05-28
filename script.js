let apiQuotes = [];

// Show new quote
function randomQuote() {
    // Get a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);
}

//Get Quotes from API
async function getQuotes() {
    const apiURL = "https://type.fit/api/quotes";
    try {
        const response = await fetch(apiURL);
        apiQuotes = await response.json();
        randomQuote();
    } catch {
        //Catch error here
    }
}
getQuotes();