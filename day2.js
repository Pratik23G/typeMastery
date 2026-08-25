var greetingMessage = "Hello world!";
// console.log(greetingMessage);
var headingMessage = document.createElement("h1");
headingMessage.textContent = greetingMessage;
document.body.appendChild(headingMessage);
//we will create some more examples now
var body = "Howdy Yall This is the main message";
var divMessage = document.createElement("divMessage");
divMessage.innerText = "Ho ho so you found me finally Alas";
document.body.append(divMessage);
