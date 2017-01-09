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



function getRandomIndex() {
	var random_index = 0;
	var random_index = Math.floor(Math.random() * (quotes.length));
	return random_index;
}


var quote_count = [];


function getQuote() {
	var random_index = getRandomIndex();
	var spliceQuote = quotes.splice(random_index,1)[0]; //remove a quote element from the quotes array. Subscript it using zero as the index to convert it to a quote object.
	quote_count.push(spliceQuote);                      //put it on the count of quotes viewed

	if (quotes.length === 0) {                        //if we have gone through all of our quotes
		quotes = quote_count; 						  //put our quotes back into quotes from quote_count
		quote_count = [];							  //reinitialize quote count
	}

	console.log(spliceQuote);
	return spliceQuote;	
}

function getRandomColor() {
	return Math.random() * 256;
}

function randomBackColor() {
	var red = 0;
	var green = 0;
	var blue = 0;
	red = getRandomColor();
	blue = getRandomColor();
	green = getRandomColor();
	rgbBack = 'rgb(' + red + ',' + green + ',' + blue + ')';
	document.body.style.background = rgbBack;
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
	5) TODO: When quote changes, randomly change background color of page.
	6) TODO: Don't display a random quote more than once until ALL quotes from the array have been displayed.
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
	print(HTML_temp);

	randomBackColor();
}


// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

