
// to change any text 
document.querySelector("h2").innerHTML="HI";


//to change any element with id

document.getElementById("head1").innerHTML=" chanege value of head1";


// to change with a variable

var doc=document.getElementById("head2");
doc.innerHTML="change valu for head2";


document.getElementById("pera1").innerHTML="pera 1 changed";


// to change with a tag name and index

document.getElementsByTagName("h2")[3].innerHTML="hello world";



// above oparation can be done by query selector
document.querySelector("#pera2").innerHTML="this is a wuery wlector";
document.querySelector(".pera3").innerHTML="this is a wuery wlector";


// parrent child
document.querySelector(".my-div a").innerHTML="-----------";

