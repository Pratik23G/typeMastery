const myDiv = document.getElementById("myDiv");

console.log(myDiv.dataset);

myDiv.dataset.name = "Bob";
myDiv.dataset.startedCodingAt = 10;

//removing actual value

myDiv.dataset.name = "";

myDiv.removeAttribute("data-name");
