
// ! How access any element

// ! 1.target element by the id

let p1=document.getElementById("p1")
console.log(p1);



// console.log(document.getElementById("p1"));



let h1 = document.getElementById("heading1")
console.log(h1);



// console.log(document.getElementById("heading1"));



// ! 2. target element by the class
// class more than one property


let cons = document.getElementsByClassName("container")
console.log(cons);
console.log(cons[0]);

console.log(cons[1]);





// ! 3.target element by selector

// give id name and classname,tagname 


let s = document.querySelector("#p1")
console.log(s);

let a = document.querySelector(".container")
console.log(a);




// console.log(document.querySelector(".conatiner"));



// ! 4.target element by tag name


let t = document.getElementsByTagName("p")
console.log(t);




// document.querySelectorAll




// ! 2...how to know what is present inside that



let c=document.getElementsByClassName("container3")
console.log(c);
console.log(c[0]);



let c1 = document.querySelector(".container3")
console.log(c1);




// console.log(c.innerText);
// give text

let inside = c1.innerText
console.log(inside);


// it give output in element and text


let inner = c1.innerHTML
console.log(inner);

// console.log(c1.innerHTML);

// ! Example


let sample = document.getElementsByClassName("sample")
console.log(sample);



let ul = document.getElementById("u")
console.log(ul);



let ul1 = document.querySelector(".sample")
console.log(ul1);

let i = ul1.innerText 
console.log(i);


let i1 = ul1.innerHTML
console.log(i1);




//  use javascript to edit 


ul1.innerText = "Web Technology"
console.log(ul1);


ul1.innerHTML="<h3>this is container4<h3> <p>i am para from js"
console.log(ul1);






// container5  

let con5 = document.querySelector(".container5")
console.log(con5);

con5.innerHTML="<h1>this is heading1<h1> <p>Lorem ipsum dolor sit amet.<p>"

// con5.innerHTML= "cons"








// ! 3.how to apply css from js

con5.style.backgroundColor="green"
con5.style.color="white"


// whatare class are present  we add,remove

let con6 = document.querySelector(".con6")
// console.log(c6);
console.log(con6.classList);


let con66 = document.querySelector(".dark")
console.log(con66.classList);


let con666 = document.querySelector(".san")
console.log(con666.classList);







// ! 4.add class in html document 

con6.classList.add("hello")
// console.log(con6);
console.log(con6.classList);


// ! remove

con6.classList.remove("dark")
console.log(con6.classList);


// 
// con6.style.backgroundColor="red"
// con6.style.color="white"




// easy way to add the class
con6.classList.add("hi")
console.log(con6.classList);




 



//  ! 5. How to create element


let heading1 = document.createElement("h1")
heading1.innerText = "I am heading1 from javascript file"
heading1.style.color="blue"


heading1.classList.add("heading1")

let container1=document.querySelector(".container")
console.log(container1);


// outside the box

// container1.after("heading1")
// container1.before("heading1")



// inside the box


// container1.append(heading1)
// container1.prepend(heading1)






// ! Example

// let sample1 = document.createElement("h1")
// sample1.innerText="This is Sample Example"


// sample1.classList.add("Example1")
// console.log(sample1.classList);




// Example1.style.height="200px"
// Example1.style.width="200px"
// Example1.style.border="2px solid red"




// ! create one div


let div = document.createElement("div")
// div.innerText="container1.after"
div.classList.add("con7")

let container6=document.querySelector(".con6")
div.innerHTML=`<h1>This is div</h1>`
con6.after(div)


// let heading = document.createElement("container1")
// heading.innerText = "This is heading in create element"
// console.log(heading);


// heading.style.color="blue"



// heading.classList.add("container1")
// console.log(heading);


let con=document.querySelector(".container1")
con.prepend(heading)

// console.log(container1);


// ! Important 


let getData = async ()=>{
    let res = await fetch("https://fakestoreapi.com/products")
    let data = await res.json()

    data.map((ele)=>{


        let items = document.createElement("li")
        li.innerText = ele.title;
        items.append(li)
        console.log(ele.title);
        
    })
}
getData()











