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
