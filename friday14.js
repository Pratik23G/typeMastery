const myList = document.getElementById("myList");

const favList = ["Mango", "Orange", "Lemon", "Peach", "Bnanana"];

// let newList = document.createElement("li");

// newList.textContent = "Banana Pro";
// myList.appendChild(newList);

for (let fruits of favList) {
  let listItem = document.createElement("li");
  listItem.textContent = fruits;

  myList.appendChild(listItem);
}
