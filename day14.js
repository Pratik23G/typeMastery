const h2Title = document.getElementById("title");

alert(h2Title.textContent);

//changing the tileContent with assignment operator

h2Title.textContent = "Paches and Pear are killers";
alert(h2Title.textContent);

//we can also use HTML tags in Js using the .innerHTML method
// basically can use HTML inside Js
h2Title.innerHTML = "<h1><em>Mango is the fruit king</em></h1>";
