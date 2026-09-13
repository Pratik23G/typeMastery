const myDiv = document.getElementById("myDiv");
const lasso = document.querySelector(".lasso");
if (myDiv) {
  console.log(myDiv.dataset);

  myDiv.dataset.name = "Bob";
  myDiv.dataset.startedCodingAt = 10;

  //removing actual value

  myDiv.dataset.name = "";

  myDiv.removeAttribute("data-name");
}
//gets a spacing in HTML format b/c it reads the raw text inside the code editor
console.log(lasso.textContent);

// is aware of rendered format
console.log(lasso.innerText);
