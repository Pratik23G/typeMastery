const h2Title = document.getElementById("title");

alert(h2Title.textContent);

//changing the tileContent with assignment operator

h2Title.textContent = "Paches and Pear are killers";
alert(h2Title.textContent);

//we can also use HTML tags in Js using the .innerHTML method
// basically can use HTML inside Js
h2Title.innerHTML = "<h1><em>Mango is the fruit king</em></h1>";

//can acheive same thing using createElement and appendChild more safe
//avoids XSS (Cross site scripting)

h2Title.textContent = "";

const h1 = document.createElement("h1");
const em = document.createElement("em");

em.textContent = "An apple a day keeps the doctor away";
h1.appendChild(em);
h2Title.appendChild(h1);
