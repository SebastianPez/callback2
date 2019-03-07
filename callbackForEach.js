// The second argument/parameter is expected to be a function
var names = ["Alice", "Bob", "Waldo", "Winston"];

var actionWhenFound = function(name, i) {
  if (name === "Waldo"){
  console.log("Found " + name + " at index " + i + "!");
  }// console.log("Found him!");
};

names.forEach(actionWhenFound);

