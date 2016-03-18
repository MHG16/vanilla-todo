// 1. Use an event listener and event handler to console.log whatever is in the input box whenever 
//the button is clicked.
// 2. Create an empty array. Whenever the button is clicked, whatever is in the input box should be 
//added to the array.
// 3. Create a function called render that clears out all of the html inside of the section.
// 4. Inside your render function, after the contents of your section is cleared, iterate over your
// array and build up a HTML string that contains all of the todo items in your array. Then set that
// newly created string to the contents of your section.


//1. Target the element we're trying to listen for the event on
//2. Tell a function to run when that event happens
//3. Create the function   

var arr = [];
var buttonEl = document.querySelector('.btnSubmit');
buttonEl.addEventListener('click', textLogger);

function textLogger() {
	console.log(document.querySelector('.txtInput').value);
	//push whatever is in the input box to the array
	arr.push(document.querySelector('.txtInput').value)
}

function render() {
	document.querySelector('txtInput').value = '';
	for (var i = 0; i < arr.length; i++) {
		 arr[i].toString;  
	}
}




