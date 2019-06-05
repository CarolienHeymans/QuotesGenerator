var quotes = [
	{
		quote: 'Design is not just what it looks like and feels like. Design is how it works.'
	},
	{
		quote: 'Innovation distinguishes between a leader and a follower.'
	},
	{
		quote: 'Reality is merely an illusion, albeit a very persistent one.'
	},
	{
		quote: "If you can't explain it simply, you don't understand it well enough."
	},
	{
		quote: 'Strive not to be a success, but rather to be of value.'
	},
	{
		quote: 'Your time is limited, so don’t waste it living someone else’s life.'
	},
	{
		quote: "Success is a lousy teacher. It seduces smart people into thinking they can't lose."
	},
	{
		quote: 'Science without religion is lame, religion without science is blind.'
	},
	{
		quote: 'Whether you think you can or you think you can’t, you’re right.'
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
