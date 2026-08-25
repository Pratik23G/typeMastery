export {};

const greetingMessage: string = "Hello world!";
// console.log(greetingMessage);

const headingMessage = document.createElement("h1");
headingMessage.textContent = greetingMessage;

document.body.appendChild(headingMessage);

//we will create some more examples now

const body: string = "Howdy Yall This is the main message";

const divMessage = document.createElement("divMessage");

divMessage.innerText = "Ho ho so you found me finally Alas";

document.body.append(divMessage);

const userHeadingMessage: string = "Pratik Gurung";
const newHeading = document.createElement("h1");

newHeading.textContent = userHeadingMessage;

document.body.appendChild(newHeading);

const day: number = 2;

const pMessafe: string = `Learning TypeScript, day ${day}`;

const paragraphText = document.createElement("p");

paragraphText.textContent = pMessafe;

document.body.appendChild(paragraphText);
