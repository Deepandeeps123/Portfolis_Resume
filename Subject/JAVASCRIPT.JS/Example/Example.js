// !nested function


// function outer(){
//     function inner(a,b){
//         console.log(a+b);
        

//     }
//     inner(10,20)

// }
// outer()



// let outer1=function(){
//     let inner1 = function(a,b){
//         console.log(a+b);
        
//     }
//     inner1(10,20)
// }
// outer1()




// let outer2=()=>{
//     let inner2=(a,b)=>{
//         console.log(a+b);
        
//     }
//     inner2(10,20)
// }
// outer()






// function outer(){
//     function inner(a,b){
//         return a+b
//     }
//     console.log(inner(10,20));
    
// }
// outer()



// let outer1=function(){
//     let inner1=function(a,b){
//         return a+b
//     }
//     console.log(inner1(10,20));
    
// }
// outer1()



// let outer2=()=>{
//     let inner2=(a,b)=>{
//         return a+b

//     }
//     console.log(inner2(10,20));
    
// }
// outer2()




// let outer=()=>{
//     let a=10
//     let b=20
//     let inner=()=>{
//         console.log(a+b);
        
//     }
//     inner()
// }
// outer()




// let outer=()=>{
//     console.log("I am outer function");
//     let inner=()=>{
//         console.log(outer);
        
//     }
//     inner();
// }
// outer()

// let a=20
// let f1=()=>{
//     let b=30
//     let f2=()=>{
//         let c=40
//         console.log(a,b,c);
        
//     }
//     f2();
//     console.log(a,b,c);
    

// }
// f1()




// let name="John"
// let sayHello = ()=>{
//     console.log("Hello " + name);
    
// }
// sayHello()
// console.log(name);


// let sayHello=()=>{
//     let name="john"
//     console.log("hello "+name);
    
// }
// sayHello()
// console.log(name);



// let outer=()=>{
//     let name="john"
//     let inner=()=>{
//         console.log(name);
        

//     }
//     inner()
//     console.log(name);
    
// }
// outer()
// console.log(name);




// let outer=(a)=>{
//     let b=a*2
//     let inner=(c)=>{
//         console.log(a,b,c);
        
//     }
//     inner(b*3)

// }
// outer(2)



// let outer=()=>{
//     let a=10
//     let b=20
//     let inner=()=>{
//         console.log(a+b);
        
//     }
//     inner()
// }
// outer()
// console.log(a);






// let outer=()=>{
//     console.log("This is callback function");
    
// }

// let inner=(a,b,c)=>{
//     console.log(a);
//     console.log(b);
//     c()

    

// }
// inner(10,20,outer)






// let add=()=>{
//     let a=100
//     let b=200
//     console.log(a+b);
    
// }
// add();




// (
//     function(a,b){
//     // let a1=10
//     // let b1=20
//     console.log(a+b);
    
// })

// (10,20)







// let a="madam"
// let b=""
// let c=a.length
// for (i=c;i>=0;i--){
//     b=b+a.charAt(i)
// }

// console.log(b);


// let palindrome = (n)=>{
//     let a=n
//     let b=""
//     let c=a.length
//     for (let i=c;i>=0;i--){
//         b=b+a.charAt(i)
        
//     }
//     console.log(b);
    

// }
// palindrome("madam")




// let palindrome=(n)=>{
//     let a=n
//     let b=""
//     let c=a.length
//     for (let i=c;i>=0;i--){
//         b=b+a.charAt(i)
//     }
//     return b
    
    

// }
// console.log(palindrome("racecar"));





// function palindrome(n){
//     let a=n
//     let b=""
//     let c=a.length
//     for(let i=c;i>=0;i--){
//         b=b+a.charAt(i)
        
//     }
//     console.log(b);
    

// }
// palindrome("racecar")




// function palindrome(n){
//     let a=n
//     let b=""
//     let c=a.length
//     for(let i=c;i>=0;i--){
//         b=b+a.charAt(i)
//     }
//     return b
// }
// console.log(palindrome("racecar"));




// let palindrome = (n)=>{
//     a=n
//     b=""
//     c=a.length
//     for(let i=c;i>=0;i--){
//         b=b+a.charAt(i)

//     }
//     return(b)

// }
// console.log(palindrome("racecar"));







// let palindrome = (n)=>{
//     a=n
//     b=""
//     c=a.length
//     for (let i=c;i>=0;i--){
//         b=b+a.charAt(i)
//     }
//     if(a==b){
//         console.log("Palindrome");
        
//     }
//     else{
//         console.log("Not Palindrome");
        
//     }
// }
// palindrome("racecar")




// let remove=(n)=>{
//     a=n
//     b=""
//     c=a.length
//     for(let i=0;c>0;i++){
//         if(!b.includes(a.charAt(i))){
//             b=b+a.charAt(i)
//         }
//     }
//     console.log(b);
    
    
// }

// remove("madam")




// a="madam"
// b=""
// c=a.length
// for(let i=0;c>0;i++){
//     if(!b.includes(a.charAt(i))){
//         b=b+a.charAt(i)
//     }
//     console.log(b);
    
// }




// n=5
// count=0
// for(let i=1;n>0;i++){
//     if(n%i==0){
//         count=count+1
//     }
// if(count==2){
//     console.log("prime");
    
// }
// else{
//     console.log("Not");
    
// }
// }








