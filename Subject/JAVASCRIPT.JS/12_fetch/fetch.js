


// link



//! https://fakestoreapi.com/products





let fetchedData = fetch("https://fakestoreapi.com/products")


// console.log(fetchedData);

fetchedData.then((data)=>{
       console.log("Inside the Block");
       
    console.log(data);


// ! Convert into json


let jsonData = data.json()
// console.log(jsonData);



jsonData.then((fd)=>{
    console.log(fd);
    
}).catch((arr)=>{
    console.log(arr);
    
})                                                                                                                                                                                                                                                                                                                                                                                                                                             





    
}).catch((arr)=>{
    console.log(arr);
    
})
