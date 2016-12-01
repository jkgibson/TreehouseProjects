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
		quote: 		"John is awesome",
		source: 	"John Gibson",
		citation: 	"John's Book of Awesomeness",
		year: 		"2016"
	},
	{
		quote: 		"John is awesomer",
		source: 	"Drake Gibson",
		citation: 	"Drake's Book of Awesomeness",
		year: 		"2016"
	},
	{
		quote: 		"John is awesomest",
		source: 	"Amy Gibson",
		citation: 	"Amy's Book of Awesomeness",
		year: 		"2016"
	},
	{
		quote: 		"John is awesomest bro",
		source: 	"Stephanie Gibson",
		citation: 	"Stephanie's Book of Awesomeness",
		year: 		"2016"
	}

]


/*
getRandomQuote: return a random quote from the array
Parameters: None
Return: random quote from the array
*/

//Grabbed this function from MDN
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function getRandomQuote() {
	ran_quote_pos = getRandomIntInclusive(0, quotes.length);
	return quotes[ran_quote_pos];

}

console.log(getRandomQuote)
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
	7) Refresh the quote after say..30 sec.
*/
function printQuote() {
	var quote = getRandomQuote();
	var quote_body = "<p class='quote'>" + quote.quote + "</p>";
	var source = "<p class = 'source'>" + quote.source;
	var citation = "<span class='citation'>" + quote.citation + "</span>";
	var year = "<span class='year'>" + quote.year + "</span>";
	var HTML_temp = quote_body.concat(source, citation,year,"</p>");
	return HTML_temp;
}












// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
//document.getElementById('loadQuote').addEventListener("click", printQuote, false);

