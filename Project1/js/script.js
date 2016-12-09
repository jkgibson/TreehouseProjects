/*

Program: quotes_project
Author: John Gibson
Description:  Will compose random quotes from authors.

Tested in IE11, Firefox and Chrome.

*/

/* Create the quotes array here. Has the following structure:
var quotes = [
	{
		quote: 		text of quote to de displayed on screen. string
		source: 	who wrote it. string
		citation: 	where it comes from. i.e. Webster's, etc. optional. string
		year: 		year it was created. optional. string
		tags: 		tags such as'humor', 'science', etc
	}
]
*/
var quotes = [
	{
		quote: 		"Two things are inifinite: the universe and human stupidity; and I'm not sure about the universe.",
		source: 	"Albert Einstein",
		citation: 	"Ego, Hunger and Aggression: a Revision of Freud's Theory and Method",
		year: 		"1920",
		tags: 		['science','humor']
	},
	{
		quote: 		"There is no law except the law there is no law.",
		source: 	"John Archibald Wheeler",
		year: 		"1955",
		tags:       ['wisdom']
	},
	{
		quote: 		"Falsity in intellectual action is intellectual immaturity.",
		source: 	"Thomas Chamberlain",
		year: 		"1888",
		tags: 		['wisdom']
	},
	{
		quote: 		"The saddest aspect of life right now is that it gathers knowledge faster than socity gathers wisdom.",
		source: 	"Isaac Asimov",
		year: 		"1981",
		tags: 		['wisdom','science']
	},
	{
		quote: 		"A man who dares to waste on hour of time has not discovered the value of life.",
		source: 	"Charles Darwin",
		year: 		"1865",
		tags: 		['wisdom']
	},
	{
		quote: 		"The good thing about science is that it's true whether or not you believe in it.",
		source: 	"Neil Degrasse Tyson",
		citation:   "Twitter",
		year: 		"2014",
		tags: 		['wisdom', 'science', 'humor']
	}
]

var largest_quote = 5; //the quote with the most properties


var seen_quotes = []; //the quotes we have already seen

/*function: getRandomIndex
  Description: used to get a random number used in indexing quotes
*/
function getRandomIndex() {
	var randomIndex = Math.floor(Math.random() * quotes.length);
	return randomIndex;
}

/*
function: getQuote
Description: retrieves a a quote from the quotes array.
             The quote is a random one and won't repeat
             a quote until all of them have been displayed.
*/
function getQuote() {
	if (quotes.length === 0) {				//if quotes array is empty
		quotes = seen_quotes;  			//repopulate it with the seen_quotes array
		seen_quotes = [];					//reset seen_quotes array
	}
	randomIndex = getRandomIndex();
	splicedQuote = quotes.splice(randomIndex,1)[0];  //remove a random quote from the quotes array, put the object in splicedQuote
	seen_quotes.push(splicedQuote);				//push that quote unto the viewed_quotes array

	console.log(splicedQuote);
	return splicedQuote;
}

/*
function: getRandomColor()
Description: gets a random rgb color
*/
function getRandomColor() {
	return Math.floor(Math.random() * 256);
}

/*
function: randomBackColor
Description: randomizes the background color
*/
function randomBackColor() {
	var red = 0;
	var green = 0;
	var blue = 0;
	red = getRandomColor();
	green = getRandomColor();
	blue = getRandomColor();
	rgbBack = 'rgb(' + red + ',' + green + ',' + blue + ')';
	document.body.style.backgroundColor = rgbBack;
}



/*
function: print
Description: used to print to the quote-box in index.html
*/
function print(message) {
  var outputDiv = document.getElementById('quote-box');
  outputDiv.innerHTML = message;
}


/*
function: printQuote
Description: prints the quote by calling the getQuote function
			 and store returned quote object in a variable. Prints according
			 to length of the quotes array.
*/
function printQuote() {
	var quote = getQuote();
	if (Object.keys(quote).length < largest_quote) { //if we don't have all of the properties
		if (quote.hasOwnProperty("year") === false) { //if it doesn't have the year property
			var quote_body = "<p class='quote'>" + quote.quote + "</p>";
			var source = "<p class='source'>" + quote.source;
			var citation = "<span class='citation'>" + quote.citation + "</span>";
			var tags = "<span class='tags'>" + quote.tags + "</span>";
			var HTML_temp = quote_body.concat(source, citation, tags, "</p>");
		} else if (quote.hasOwnProperty("citation") === false) {  //if it doesn't have the citation property
			var quote_body = "<p class='quote'>" + quote.quote + "</p>";
			var source = "<p class='source'>" + quote.source;
			var year = "<span class='year'>" + quote.year + "</span>";
			var tags = "<span class='tags'>" + quote.tags + "</span>";
			var HTML_temp = quote_body.concat(source, year, tags, "</p>");
		} else {  //if it doesn't have citation or year
			var quote_body = "<p class='quote'>" + quote.quote + "</p>";
			var source = "<p class='source'>" + quote.source;
			var tags = "<span class='tags'>" + quote.tags + "</span>";
			var HTML_temp = quote_body.concat(source,tags, "</p>");
		}
	} else { //if it has all of the properties
		var quote_body = "<p class='quote'>" + quote.quote + "</p>";
		var source = "<p class='source'>" + quote.source;
		var citation = "<span class='citation'>" + quote.citation + "</span>";
		var year = "<span class='year'>" + quote.year + "</span>";
		var tags = "<span class='tags'>" + quote.tags + "</span>";
		var HTML_temp = quote_body.concat(source, citation, year, tags, "</p>");
	}
	randomBackColor();  //call to randomize the background color
	print(HTML_temp);
}


// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//print a new quote every thirty seconds
window.setInterval(printQuote, 30000);
