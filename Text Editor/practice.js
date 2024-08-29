



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







//text editor

let text = document.querySelector("#text");
let p = document.querySelector("p");

text.addEventListener("input",function(){
    
    console.log(text.value);
    p.innerText = text.value;
});



