let apiQuotes = [];
let quoteContainer = document.getElementById('quote-container');
let quoteText = document.getElementById("quote");
let quoteAuthor = document.getElementById("author");
let nextQuote = document.getElementById("next-quote");
let twitterButton = document.getElementById("twitter");
let loader = document.getElementById('loader');

// show loader
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

//hide loader
function complete() {
    loader.hidden = true;
    quoteContainer.hidden = false;
}

// Show new quote
function randomQuote() {
    loading();
    // Get a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

    //if author is not available set unknown
    if (!quote.author) {
        quoteAuthor.textContent = "Unkown";
    } else {
        quoteAuthor.textContent = quote.author;
    }

    //if lenth of quote is greater than 40 then add styling
    if (quoteText.textContent.length >= 40) {
        quoteText.classList.add('large-quote-text');
    } else {
        quoteText.classList.remove('large-quote-text');
    }

    //show quote, hide loader
    quoteText.textContent = quote.text;
    complete();
}

//Get Quotes from API
async function getQuotes() {
    loading();
    const apiURL = "https://type.fit/api/quotes";
    try {
        const response = await fetch(apiURL);
        apiQuotes = await response.json();
        randomQuote();
    } catch {
        //Catch error here
    }
}

//Add quote to twitter
function tweetQuote() {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteAuthor.textContent}`;
    window.open(tweetUrl, "_blank");
}

//EventListner
nextQuote.addEventListener('click', randomQuote);
twitterButton.addEventListener('click', tweetQuote);


//onLoad
getQuotes();


