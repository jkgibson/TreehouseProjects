/*

Program: quotes_project
Author: John Gibson
Description:  Will compose random quotes from authors.

*/

/* TODO: Create the quotes array here. Will have the following structure:
var quotes = [
	{
		quote: 		text of quote to de displayed on screen. string
		source: 	who wrote it. string
		citation: 	where it comes from. i.e. Webster's, etc. optional. string
		year: 		year it was created. optional. string
	}
]
*/
var quotes = [
	{
		quote: 		"Two things are inifinite: the universe and human stupidity; and I'm not sure about the universe.",
		source: 	"Albert Einstein",
		citation: 	"Ego, Hunger and Aggression: a Revision of Freud's Theory and Method",
		year: 		"1920"
	},
	{
		quote: 		"There is no law except the law there is no law.",
		source: 	"John Archibald Wheeler",
		year: 		"1955"
	},
	{
		quote: 		"Falsity in intelelctual action is intellectual immaturity.",
		source: 	"Thomas Chamberlain",
		year: "1888"
	},
	{
		quote: 		"The saddest aspect of life right now is that it gathers knowledge faster than socity gathers wisdom.",
		source: 	"Isaac Asimov",
		year: 	"1981"
	},
	{
		quote: 		"A man who dares to waste on hour of time has not discovered the value of life.",
		source: 	"Charled Darwin",
		year: 	"1865"
	},
	{
		quote: 		"The good thing about science is that it's true wheter or not you believe in it.",
		source: 	"Neil Degrasse Tyson",
		citation: "Twitter",
		year: 	"2014"
	}
]

var viewed_quotes = [];

function getRandomIndex() {
	var randomIndex = Math.floor(Math.random() * quotes.length);
	return randomIndex;
}

function getQuote() {
	if (quotes.length === 0) {				//if quotes array is empty
		quotes = viewed_quotes;  			//repopulate it with the viewed quotes array
		viewed_quotes = [];					//reset viewed_quotes array
	}
	randomIndex = getRandomIndex();
	splicedQuote = quotes.splice(randomIndex,1)[0];  //remove a random quote from the quotes array, put the object in splicedQuote
	viewed_quotes.push(splicedQuote);				//push that quote unto the viewed_quotes array

	console.log(splicedQuote);
	return splicedQuote;
}

function getRandomColor() {
	return Math.floor(Math.random() * 256);
}

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

//console.log(getRandomQuote)
/*
TODO: printQuote: prints the quote by
	1) call the getRandomQuote function and store returned quote object in a variable
	2) construct a string containing the properties of the quote object using the
	following HTML template:

	<p class="quote"> [quote here] </p>
	<p class="source"> [source here]
 		<span class="citation"> [citation here] </span>
  		<span class="year"> [year here] </span>
	</p>

	3) printQuote doesn't print if there is a missing citation or if year property is mssing
	4) will display the final HTML to the page. Use the following JS snippet to accomplish it:
		document.getElementById('quote-box').innerHTML
	5) When quote changes, randomly change background color of page.
	6) Don't display a random quote more than once until ALL quotes from the array have been displayed.
	   To help reviewers (and yourself) verify that the quotes don’t repeat until they’ve all been displayed,
	   log the quote to the console each time the “Show Another Quote” button is clicked.
	7) TODO: Refresh the quote after say..30 sec.
*/

function print(message) {
  var outputDiv = document.getElementById('quote-box');
  outputDiv.innerHTML = message;
}

function printQuote() {
	var quote = getQuote();
	if (Object.keys(quote).length < 4) {
		if (quote.hasOwnProperty("year") === false) {
			var quote_body = "<p class='quote'>" + quote.quote + "</p>";
			var source = "<p class='source'>" + quote.source;
			var citation = "<span class='citation'>" + quote.citation + "</span>";
			var HTML_temp = quote_body.concat(source, citation, "</p>");
		} else if (quote.hasOwnProperty("citation") === false) {
			var quote_body = "<p class='quote'>" + quote.quote + "</p>";
			var source = "<p class='source'>" + quote.source;
			var year = "<span class='year'>" + quote.year + "</span>";
			var HTML_temp = quote_body.concat(source, year,"</p>");
		} else {
			var quote_body = "<p class='quote'>" + quote.quote + "</p>";
			var source = "<p class='source'>" + quote.source;
			var HTML_temp = quote_body.concat(source, "</p>");
		}
	} else {
		var quote_body = "<p class='quote'>" + quote.quote + "</p>";
		var source = "<p class='source'>" + quote.source;
		var citation = "<span class='citation'>" + quote.citation + "</span>";
		var year = "<span class='year'>" + quote.year + "</span>";
		var HTML_temp = quote_body.concat(source, citation, year, "</p>");
	}
	randomBackColor();
	print(HTML_temp);
}


// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

