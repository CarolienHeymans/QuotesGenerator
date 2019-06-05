var quotes = [
	{
		quote: 'Knufjes!'
	},
	{
		quote: 'Stomkop'
	},
	{
		quote: 'Flapoor'
	},
	{
		quote: 'Als jij doodgaat mag ik je nijntjes, he?'
	}
];

// function to load and display a new quote
function newQuote() {
	var quoteID = Math.floor(Math.random() * quotes.length);
	$('#quote').html(quotes[quoteID].quote);
}

// wait for page load before displaying content
$(document).ready(function() {
	// load an initial quote
	newQuote();

	// retrieve a new quote when the button is clicked
	$('#generateButton').on('click', function() {
		newQuote();
	});
});
