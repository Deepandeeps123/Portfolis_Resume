// let a="racecar"
// let length=a.length-1
// let b=""
// for (let i=length;i>=0;i--)
// {
//     b=b+a.charAt(i)
// }
// if(b==a){
//     console.log("Palindrome");
    
// }
// else{
//     console.log("Not Palindrome");
    
// }







// !how to declare function


// function function_name()
// {

// }
// function_name()




function display()
{
    console.log("hello..I am display function");
    
}
display()


// ! Function without parameters



function add1()
{
    let a=10,b=20
    console.log(a+b);
    
}
add1()


// !Function with parameters

function add(a,b)
{
    console.log(a+b);
    
}
add(60,20)






// !Example


function a(a,b,c,d,e)
{
    console.log(a+b+c+d+e);
    
}
a(10,20,30,40,50)




// ! function with return value (named function)(without out print)


function add2(a,b)
{
    return a+b
}

add2(10,20)


// !

function add3(a,b)
{
    return a+b
}
a=add3(100,200)
console.log(a);

// !

function add4(a,b)
{
    return a+b
}
console.log(add4(200,200));





// !2. function with expression   (anomation function) 


// *without delclare function_name


// function ()
// {
//     console.log("hello");
    
// }




let hello = function ()
{
    console.log("I am function with expression");
    
}
hello()


let hi = function ()
{
    console.log("I am hi function");
    
}
hi()





// ! 3.Arrow function


let multiply = () =>{
    console.log("I am Arrow function");
    
}
multiply()

// ! Example

let aa = (a,b) => {
    return a+b
}
console.log(aa(10,20));

// 

let aaa = (a,b) =>{
    console.log(a+b);
    
}
aaa(300,300)





































// ! Prime number



// let a11=5
// res=true
// b=2
// for (let i=b;a11>0;i++)
// {
//     if(a11%b==0)
//     {
//         res=false
//     }
// if (res==true)
// {
//     console.log('Prime');
    
// }
// }



// let icount=0
// let ocount=0
// function prime(n)

// {
// for(let i=2;i<=n;i++)
// {
//     if(n%i==0){
//         icount=icount+1
//     }
//     else{
//         ocount=ocount=1

//     }
// }
// console.log(icount);
// console.log(ocount);


// }
// prime(5)



function prime(n)
{
    let count=0
    for(let i=1;i<=n;i++)
    {

       if(n%i==0){
        count=count+1
       }

    }
if (count==2){
    console.log('Prime');
    
}
else{
    console.log('Not');
    
}

}
prime(5)










function isprime(n){
    let count=0
    for(let i=0;i<=n;i++){
        if (n%i==0){
            count=count+1
        }
    }
if (count==2){
    console.log("it is prime ");
    
}
else{
    console.log("Not");
    
}
}
isprime(19)










// !nested function



function outer(){
    function inner(a,b){
        console.log(a+b);
        
    }
    inner(100,20)
}
outer()





let outer1 = function(){
    let a=10
    let b=200
    let inner1 = function(){
        console.log(a+b);
        
    }
    inner1()
}
outer1()




let outer2 =()=>{
    let a1=200
    let b1=300
    let inner2 =()=>{
        console.log(a1+b1);
        
    }
    inner2()

}
outer2()





// What is lexical scoping


// when we are declared nested function ,inner function take all the property of of outer function but outer function can't
// take the property of inner function ,this is called lexical scoping



function outer3(){
    let a3=250
    let b3=200
    function inner3(){
        console.log(a3+b3);
        
    }
    inner3()

}
outer3()
// console.log(a3+b3);
// console.log(outer(a));



// ! Higher order function and Callback Function

// the function who take s another function as an argument or parameter is called higher order function

// the function which we are sending as parameter is called callback function


let hii = ()=>{
    console.log("I am hi function");
    
}

let helloo = (a,b,c)=>{
    console.log(a);
    console.log(b);
    c()
}
helloo(10,"abc",hii)




// callback

let cal = ()=>{
    console.log("This is called callback function");
    
}



// Higher order

let high = (a,b,c)=>{
    console.log(a);
    console.log(b);
    c()
    
}
high(10,20,cal)




// 

high(20,"san",()=>{
    console.log("How are you");
    
})



high(21,"DEEPAN",()=>{
    console.log("Javascript");
    

})


// {}----->function declaration
// ()------> function calling


// ! Example


let one = ()=>{
    console.log("Callback function");
    
}

let two = (s,s1,s3)=>{
    console.log(s);
    console.log(s1);
    s3()
    
    
}
two(10,"ten",one);


//! IIFE

(
    function(){
    console.log("this");
    
})
()







// let arr1=[2,9,12,18]
// let arr2=[3,5,11,20]
// let arr3=arr1.concat(arr2)
// console.log(arr3);
//let arr3=[...arr1,...arr2]
// console.log(arr3);

// let arr=arr1.length
// let arr0=arr2.length
// let i=0
// let j=0






// let --global scope ,var--local scope


// let scope = ()=>{
//     let a=20
//     var b=30
//     const c=40
//     console.log(a);
//     console.log(b);
//     console.log(c);
    
// }
// console.log(a);





// ! error

// console.log(num);------Error






// num=20
// console.log(num);     20



// let num
// num=20
// console.log(num);



// console.log(num);
// let num
// num=20
// console.log(num);







var a
console.log(a);




















