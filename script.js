// prompt 8: create a new li element
const li = document.createElement("li");
console.log(li);

// prompt 9: give the li the text "four"
li.innerText = "four";

// prompt 10: append the li to the ul element
// doesn't work [const ul = document.getElementById("ul");]
const ul = document.querySelector('ul');
ul.appendChild(li);