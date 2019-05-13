// single line comment

/*
multi-line
comment
*/

// to log information to the console
// we can use the console.log();

console.log("hello world");

// single line instruction - statement
// has to end with a semicolon

// variable
var messageToTheWorld = "Hello world" ;
var myName = "from Matteo";
var space = " "

var myMessage = messageToTheWorld + space + myName;

// try to substitute the content of the h1 element

var titleElement = document.getElementById("title");
titleElement.innerHTML = myMessage;

// innerHTML manipulates the content between the HTML
titleElement.innerHTML = myMessage;

/****************
 * Manipulate CSS
****************/
// select the element with the ID 'styleButton'
var buttonElement = document.getElementById('styleButton');

// add event listener .addEventListener(type, function)
buttonElement.addEventListener('click', changeTextColor);

//var counter storing number
var counter = 0;
counter = counter+1;

// functiion containing some code):
function changeTextColor(){

  var titleColors = ["red", "purple", "pink", "orange", "green"];
  // print the whole Array
  console.log(titleColors);
  // Print the Array lenght
  console.log(titleColors.length);
  // print the first item in the Array
  console.log(titleColors[0]);
  //print the last item in the Array
  console.log(titleColors[titleColors.length - 1]);

  // assign a new value to the color property
  titleElement.style.color = titleColors [counter];

  if(counter == titleColors.length - 1) {
    console.log("whoooo IT IS WORKING");
    counter = -1;
  }

  //increment by one
  counter ++;

  console.log('the function worked');
};


// quiz example 

var questions = ["q1..", "q2"];
var answer = ["a1", "a2"]
