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

//Section click function

document.body.addEventListener('click', function(event){
	if (event.target.className === 'article-section') {
		console.log(event.target.innerHTML);}
});

//next function will go here

