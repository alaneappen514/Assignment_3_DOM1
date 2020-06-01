// 1 - Select the section with an id of container without using querySelector.
document.getElementById("container");


// 2 - Select the section with an id of container using querySelector.
document.querySelector("#container");


// 3 - Select all of the list items with a class of "second".
document.getElementsByClassName("second")


// 4 - Select a list item with a class of third, but only the list item inside of the ol tag.
document.querySelector("#container > ol > li.third");

// Part 5
// Select the section id container and change the text to "Hello!" 
const section = document.getElementById("container");
section.innerText = "Hello!";
// Part 6
// Select the div with the class of footer and add the class main to it
const footer = document.getElementsByClassName("footer")[0];
footer.classList.add("main");
// Part 7
// Remove class main from the div of class footer
footer.classList.remove("main");
