// Part 5
// Select the section id container and change the text to "Hello!" 
const section = document.getElementById("container");
section.innerText = "Hello!";
// Part 6
// Select the div with the class of footer and add the class main to it
const footer = document.getElementsByClassName("footer")[0];
footer.classList.add("main");
// Part 7
footer.classList.remove("main");