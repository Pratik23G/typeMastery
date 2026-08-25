const greetingMessage: string = "Hello world!";
// console.log(greetingMessage);

const headingMessage = document.createElement("h1");
headingMessage.textContent = greetingMessage;

document.body.appendChild(headingMessage);
