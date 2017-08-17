console.log("I'm in main JS");

// H1 hover function
document.body.addEventListener('mouseover', function(event) {
		if (event.target.id === 'page-title') {
			console.log('you are in the header');}
});

document.body.addEventListener('mouseout', function(event) {
		if (event.target.id === 'page-title') {
			console.log('you moved out of the header');}
});

