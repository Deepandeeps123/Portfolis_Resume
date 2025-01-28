
// !higher order array method



// let arr=[10,20,30,40,50]
// arr.forEach((ele,indx,arr1)=>{
//     console.log(ele,indx,arr1);
    
// })

// let arr=[1,2,3,4]
// let arr1=arr*2
// console.log(arr1);





// let a=[1,2,3,4]
// let b=a.length
// for(let i=0;i<b;i++){
//     console.log(a[i]*2);
    
// }


// let num=[1,2,3,4]
// num.forEach(num =>{
//     console.log(num*2);
    
// })




// let arr=[10,20,30,40,50]
// arr.forEach((arr)=>{
//     console.log(arr);
    
// })




// let num=[10,20,30,40,50]
// num.forEach(() =>{
//     console.log(arr);
    
// })







// let arr=[10,20,30,40,50]
// arr.forEach((ele)=>{
//     console.log(arr);
    
// })





// let arr=[10,20,30,40,50]
// arr.forEach((indx) =>{
//     console.log(indx);
    
// })




// let arr=[10,20,30,40,50]
// arr.forEach((ele,indx,arr1)=>{
//     console.log(ele,indx,arr);
    
// })





// let arr1=[10,20,30,40,50,60]
// let arr2=[]
// let c=arr1.length
// for(let i=0;i<=c;i++){
//     if(arr1[i]>30){
//         arr2.push(arr1[i])
//     }
// }
// console.log(arr2);





// let arr1=[10,20,30,40,50,60]
// let arr2=[]
// arr1.forEach((a)=>{
//     if(a>30){
//         arr2.push(a)
//     }
// })
// console.log(arr2);







// ! add 100 with all the element and give the array


// let arr=[10,20,30,40,50,60]
// let arr1=[]
// let c=arr.length
// for(let i=0;i<c;i++){
//     arr1.push(arr[i]+100)
// }
// console.log(arr1);




// let add=[]
// arr.forEach((a)=>{
//     add.push(a+100)
    
// })
// console.log(add);






// ! add the leement of the array

// let arr=[10,20,30,40,50]
// let add=0
// let c=arr.length
// for(let i=0;i<c;i++){
//     add=add+arr[i]
// }
// console.log(add);








// let arr=[10,20,30,40,50]
// add=0
// arr.forEach((a)=>{
//     add=add+a
// })
// console.log(add);






// ! 2.filter method


// let arr=[10,20,30,40,50,60]
// arr.filter((a)=>{
//     console.log(a);
    
// })




// let arr=[10,20,30,40,50,60]
// arr.filter((ele,indx,arr1)=>{
//     console.log(ele,indx,arr);
    
// })





// let arr=[10,20,30,40,50,60]
// arr.filter((ele)=>{
//     if(ele>30){
//         console.log(ele);
        
//     }
// })




// let arr=[10,20,30,40,50,60]
// let filterarray=arr.filter((ele)=>{
//     return ele>30
// })
// console.log(filterarray);








//! 3.map



// let arr=[10,20,30,40,50,60]


// let maparr=arr.map((a)=>{
//     return a+100
// })
// console.log(maparr);




// let maparr=arr.map((a)=>a+100)
// console.log(maparr);



// ! 4.reduce

// let arr=[10,20,30,40,50]
// arr.reduce((acc,ele)=>{
//     console.log(acc+ele);
    
// },0)


// arr=[10,20,30,40,50,60]

// let reducearr=arr.reduce((acc,ele)=>{ 
//     return acc+ele

// },0)
// console.log(reducearr);




// ! 5.sort


let num=[5,4,3,2,1]
let arrange=num.sort((a,b)=>a-b)
console.log(arrange);



let unsort=[4,1,7,2,9,3]
let asc=unsort.sort((a,b) =>a-b)
console.log(asc);







