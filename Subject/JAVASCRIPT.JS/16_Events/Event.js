// let hello=()=>{
//     // alert("hello")
// }

//! Important


// ! Mouse Event

// var button=document.getElementById("btn")
// btn.addEventListener('click',(event)=>{
//     button.textContent="Yes Click";
//     console.log("Clicked");
    
// })


// var button=document.getElementById("btn")
// btn.addEventListener('mouseover',(event)=>{
//     button.textContent="Move";
//     console.log("Hover");
    
// })


// var button=document.getElementById("btn")
// btn.addEventListener('mouseout',(event)=>{
//     button.textContent="Move out";
//     console.log("mouse out");
//     console.log(event);
    
    
// })



// ! KeyBoard Event



var button=document.getElementById("myInput")
document.addEventListener('change',(event)=>{
    // button.textContent="Move out";
    console.log(event.target.value);
    // console.log(event);
    
    
})



// !
// let button = document.getElementById("btn")
// button.addEventListener("click",()=>{
//     console.log("button clicked");
// })



// let button1 = document.getElementById("btn")
// button1.addEventListener("mousedown",()=>{
//     console.log("Mouse in mousedown");
// })


// document.addEventListener("keypress", (event) => {
//     console.log(`Key released: ${event.key}`);
//   });



// const input /= document.getElementById("myInput");

// // Change Event
// document.addEventListener("change", (event) => {
//   console.log(`Input changed to: ${event.target.value}`);
// });






// const input = document.getElementById("myInput");

// // Change Event
// document.addEventListener("change", (event) => {
//   console.log(`Input is focused`);
// });




// document.addEventListener("blur", () => {
//     console.log("Input lost focus! ${event.target.value}");
//   });