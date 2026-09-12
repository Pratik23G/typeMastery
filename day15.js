const fragList = document.getElementById("fragList");

const docFrag = document.createDocumentFragment();

let item1 = document.createElement("li");
let item2 = document.createElement("li");

item1.textContent = "Jordan 1";
item2.textContent = "Jordan 4";

docFrag.appendChild(item1);
docFrag.appendChild(item2);

console.log(docFrag);

fragList.appendChild(docFrag);

console.log(docFrag);

const myPara = document.getElementById("myPara");

console.log(myPara.classList);

myPara.classList.add("bold", "big-font");

myPara.classList.remove("bold");

myPara.classList.replace("big-font", "red-bg");

//toggle finds red-bg class and then removes it
myPara.classList.toggle("red-bg");

//calling togggle adds it to the class list
myPara.classList.toggle("bold");
myPara.classList.toggle("red-bg");

console.log(myPara.classList.contains("white-txt")); //should give false
