let quotes = {
	start: '#test#',
	test: [ 'Stomkop', 'Idioot', 'Knufjes' ]
};

let grammar;

function setup() {
	noCanvas();
	let grammar = tracery.createGrammar(quotes);

	let result = grammar.flatten('#start#');
	console.log(result);
}
