

var quotes = [{
	"name": "Dries",
		"quote": 'Knufjes!'
  }, {
	"name": "Carolien",
		"quote": 'Stomkop!'
  }];
  
  // function to load and display a new quote
  function newQuote() {
	var quoteID = Math.floor(Math.random() * (quotes.length));
	$("#quote").html(quotes[quoteID].quote);
	$("#name").html(quotes[quoteID].name);
	
  }
  
  // wait for page load before displaying content
  $(document).ready(function() {
	// load an initial quote
	newQuote();
  
	// retrieve a new quote when the button is clicked
	$("#generateButton").on("click", function() {
	  newQuote();
	});
  });