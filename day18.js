const myList = document.getElementById("myList");

const cherryItems = document.getElementById("cherryItems");

const orangeItems = document.createElement("li");

orangeItems.textContent = "orange";
myList.insertBefore(orangeItems, cherryItems);

//we can also add the child node in the begining
// unlike append node which adds the child node at
// the end insertBefore of this technique can push
// child node upfront.

function addToFirst(parentNode, toInsertNode) {
  const firstElementChild = parentNode.firstElementChild;

  parentNode.insertBefore(toInsertNode, firstElementChild);
}

const mangoItems = document.createElement("li");

mangoItems.textContent = "Mango";

addToFirst(myList, mangoItems);
