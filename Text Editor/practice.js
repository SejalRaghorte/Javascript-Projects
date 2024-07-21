// let btns = document.querySelectorAll("button");

// // for(btn of btns){
// //     btn.onclick = sayhello;
// //     btn.onmouseenter = youhover;
// // };

// function sayhello() {
//     alert("you clicked the button.");
// }

// function youhover() {
//     console.log("Click me, If you want to see details.");
// }

// function sayName() {
//     alert("hiii, my name is sejal");
// }

// for(btn of btns){
//     // btn.addEventListener("click",sayhello);
//     // btn.addEventListener("click",sayName);
//     btn.addEventListener("dblclick",function() {
//         console.log("you double clicked");
//     })
// }


// let btn = document.querySelector("button");

// btn.addEventListener("click",function(){
//     let h3 = document.querySelector("h3");
//     let randomcolor = generaterandomcolor();
//     h3.innerText = randomcolor;

//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomcolor;
// });

// function generaterandomcolor(){
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);

//     let color = `rgb(${red}, ${green}, ${blue})`;
//     return color;
// };


// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");
// let p = document.querySelector("p");
// let btn = document.querySelector("button");

// function text(){
//     console.log(this.innerText);
//     this.style.backgroundColor = "pink";
// };

// h1.addEventListener("click",text);
// h3.addEventListener("click",text);
// p.addEventListener("click",text);
// btn.addEventListener("click",text);


//keyboard events
// let inp = document.querySelector("input");

// inp.addEventListener("keydown",function(event){
//     console.log(event);
//     console.log(event.key);
//     console.log(event.code);
// });

// inp.addEventListener("keyup",function(event){
//     console.log(event);
//     console.log(event.key);
//     console.log(event.code);
// });

// inp.addEventListener("keydown",function(event){
//      if(event.key == "ArrowUp"){
//         console.log("character moves upward");
//      } else if(event.key == "ArrowDown"){
//         console.log("character moves downward");
//      }else if(event.key == "ArrowLeft"){
//         console.log("character moves left");
//      }else if(event.key == "ArrowRight"){
//         console.log("character moves right");
//      }else{
//         console.log("wrong key entered.");
//      }    
// });



//extracting form data
// let form = document.querySelector("form");

// form.addEventListener("submit",function(event){
//     event.preventDefault();

//     let user = this.elements[0];
//     let pass = this.elements[1];

//     alert(`Hi ${user.value}, your password is: ${pass.value}.`);
// })



//text editor

let text = document.querySelector("#text");
let p = document.querySelector("p");

text.addEventListener("input",function(){
    
    console.log(text.value);
    p.innerText = text.value;
});



