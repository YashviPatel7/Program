var element;
// element=document.all[2];
// element=document.body;
// element=document.head;
// element=document.title;
// element=document.URL;
// element=document.doctype;
// element=document.baseURI;
// element=document.domain;
// element=document.images;
// element=document.getElementById("logo-text");
// element=document.getElementsByClassName("header");
// element=document.getElementsByClassName("list");
// element=document.getElementsByClassName("list")[3];  3 no-index about us
// element=document.getElementsByTagName("footer"); 1
// element=document.getElementsByTagName("ul");  3
// element=document.getElementsByTagName("ul")[2];

// DOM get method

// element=document.getElementById("logo-text").innerHTML;
// element=document.getElementById("logo-text").innerText;
// element=document.getElementById("logo-text").innerHTML;
// element=document.getElementById("logo-text").getAttribute("class");
// element=document.getElementById("logo-text").getAttribute("id");
// element=document.getElementById("logo-text").getAttribute("style");
// element=document.getElementById("logo-text").getAttribute("onClick");
// element=document.getElementById("logo-text").getAttributeNode("onClick");
// element=document.getElementById("logo-text").getAttributeNode("style");
// element=document.getElementById("logo-text").getAttributeNode("style").value;
// element=document.getElementById("logo-text").attributes;
// element=document.getElementById("logo-text").attributes[2];
// element=document.getElementById("logo-text").attributes[2].value;
// element=document.getElementById("logo-text").attributes[2].name;

// document.getElementById("logo-text").innerText= "Wow";

// element=document.getElementById("logo-text").innerHTML;

// console.log(element);

// document.getElementById("logo-text").innerHTML="<h1>Wow</h1>";

// element=document.getElementById("logo-text").innerHTML;
// element=document.getElementById("logo-text").innerHTML;

 

// document.getElementById("logo-text").setAttribute("class","xyz")

// element=document.getElementById("logo-text").getAttribute("class");

// document.getElementById("logo-text").setAttribute("style","border: 10px dotted yellow");

// document.getElementById("logo-text").attributes[1].value="xyz";

// document.getElementById("logo-text").removeAttribute("style");

// document.getElementById("logo-text").removeAttribute("class");


// document.querySelector("#logo-text").innerHTML="<h1>hello</h1>";

// element=document.querySelector("#logo-text").getAttribute("class");
// element=document.querySelector(".second-ul");
// element=document.querySelectorAll(".second-ul");
// element=document.querySelectorAll("ul");

//  element=document.getElementById("logo-text").getAttribute("class");
console.log(element);



// let a=document;
// a=document.body;
// a=document.forms[0];
// array.form(a).forEach(function(element) {
//     console.log(element);
// })
// console.log(a);

// DOM set method

// Event

document.getElementById("logo-text").onclick=pqr;
// document.getElementById("logo-text").onmouseenter=abc;

document.getElementById("logo-text").addEventListener("mouseenter",abc);
document.getElementById("logo-text").addEventListener("click",function(){

    // document.getElementById("logo-text").style.border = "10px solid red";
    this.style.border = "10px solid red";
    document.querySelector("#logo-text").innerHTML="<h1>hello</h1>";
});




function abc(){
    document.getElementById("logo-text").style.background = "green";
    document.getElementById("logo-text").innerText="Wow";
}
function pqr(){
    document.getElementById("logo-text").style.background = "lightblue";
}


const arr = [1, 2, 3];
// Output 1 2 3
console.log(...arr);