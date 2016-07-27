// this stuff is outside any function so will run as soon as the file is loaded
var sourcedGreeting = "Hello World from sourced js";
console.log( "sourcedGreeting: " + sourcedGreeting );

// declare a function that will also console.log out a hello worl message
var helloWorldFunction = function(){
  var sourcedGreetingFromFunction = "Hello World from sourced js";
  console.log( "sourcedGreetingFromFunction: " + sourcedGreetingFromFunction );
};
// this line will run when the filw i loaded as well
// it must follow the declaration
helloWorldFunction();
