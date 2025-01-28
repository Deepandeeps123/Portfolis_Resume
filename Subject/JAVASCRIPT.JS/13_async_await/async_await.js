


let getData = ()=>{
    var fetchedData = fetch ("https://fakestoreapi.com/products")
    console.log(fetchedData);
    let jsonData  = fetchedData.json()
    console.log(jsonData);
    

}
getData()





// ! Handle with error


// let getData =async ()=>{
//     {
//         try{
//             let fetchedData =await fetch("https://fakestoreapi.com/products")
//             console.log(fetchedData);
//             let jsonData =await fetchedData.json()
//             console.log(jsonData);


//             jsonData.forEach((ele)=>{
//                 console.log(ele.title);
                
//             })

//             jsonData.map((ele)=>{
//                 console.log(ele.price,ele.rating.rate);
                
//             })





//             // console.log(jsonData[2])
            
            
            
            
//         }
//         catch{
//             console.log("Error");
            
//         }
//     }

// }
// getData()




