
//text editor

let text = document.querySelector("#text");
let p = document.querySelector("p");

text.addEventListener("input",function(){
    
    console.log(text.value);
    p.innerText = text.value;
});



