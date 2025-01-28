
// ! Syntax


// let variable_name = new Promise ((callback function ----resolve,result)=>{

// })




// 3 states



// 1.pending
// 2.fulfilled
// 3.rejected




// ! Promise 
// is a javascript object




// ! 1.resolve
let p = new Promise((resolve,reject)=>{
    resolve("I am resolve")
})
console.log(p);



// ! 2.reject

let p1 = new Promise((resolve,reject)=>{
    reject("i will not do that")
})
console.log(p1);







// handle the result


p.then((data)=>{
    console.log(data);
    
})



// p1.then((data)=>{
//     console.log(data);
    
// })




p1.then((data)=>{
    console.log(data);   
}).catch((arr)=>{
    console.log(arr);   
}).finally(
    console.log("promise is running")
)









let a1=10
let b1=100

let a = new Promise((resolve,reject)=>{
    if(a1==b1){
        resolve("Coreect")
    }
    else{
        reject("Wrong")
        // console.log(a1,b1);
        
    }

})
console.log(a);


a.then((data)=>{
    console.log("Fullfilled",a1==b1);
    

})




a.catch((arr)=>{
    console.log("Rejected",a1===b1);
    
})




a.finally(()=>{
    console.log("Output");
    
})


// ! Example


// let a = new Promise((resolve,reject)=>{
//     resolve("This is resolve")
// })
// console.log(a);



// let b = new Promise((resolve,reject)=>{
//     reject("This is reject")
// })
// console.log(b);









