console.log("I'm in main JS");

var outputTarget = document.getElementById('output-target');
// H1 hover function
document.body.addEventListener('mouseover', function(event) {
		if (event.target.id === 'page-title') {
			// console.log('you are in the header');
			printOutput('you are in the header');}
});

document.body.addEventListener('mouseout', function(event) {
		if (event.target.id === 'page-title') {
			// console.log('you moved out of the header');
			printOutput('you moved out of the header');}
});

//Section click function

document.body.addEventListener('click', function(event){
	if (event.target.className === 'article-section') {
		// console.log(event.target.innerHTML);
		printOutput(event.target.innerHTML);}
});

//Print To Dom Function

function printOutput(input) {
	// console.log('printOutput:',input);
	var printString = '';
	printString += `<div>`;
	printString +=    `<h3>${input}</h3>`;
	printString += `</div>`;
	outputTarget.innerHTML = printString;	
}

