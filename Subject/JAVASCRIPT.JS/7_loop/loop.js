// ! while 


let i=0
while (i<5){
    console.log(i);
    i++;
    
}



// ! do while 


let i1=0
do {
    console.log(i1);
    i1++;
    
} while(i<5);








let student = [
    {
        sid:1,
        sname:"Dinga",
        age:10,
        skills:["python","htms","js"],
        address:{
            city:"chennai",
            pin:600026
        }
    },
    {
        sid:2,
        sname:"Dingi",
        age:20,
        skills:["python","htms","js"],
        address:{
            city:"chennai",
            pin:600026
        }
    },
    {
        sid:3,
        sname:"Manga",
        age:30,
        skills:["python","htms","js"],
        address:{
            city:"chennai",
            pin:600026
        }
    }

]




console.log(student);
console.log(student[0]);
console.log(student[1]);
console.log(student[2]);

student.map((ele)=>{
    console.log(ele);
    
})

// element give any name



student.forEach((stu)=>{
    console.log(stu);
    
})

student.forEach((aaa)=>{
    console.log(aaa.sname);
    
})


student.map((ele)=>{
    console.log(ele.skills);
     
})

student.forEach((ele)=>{
    console.log(ele.skills);
    
})















// ! for-in  loop for array



// for in loop in array it will take index


arr=[10,20,30,40]
for (let i in arr){
    console.log(i);
    
}



// ! for-of loop for array


// it will take all the element of the array
// object can't use for-of loop in object


arr1=[10,20,30,40]
for (let i of arr1){
    console.log(i);
    
}


// ! for object for in loop will take the keys



let ob={
    name:"abc",
    age:22,
    city:"chennai"

}


// it takes in keys
//object can use in for-in loop in object


for (let i in ob){
    console.log(i);
    
}


// for (let i of ob){
//     console.log(i);
    
// }






// ! string



let str="helloo"
for (let i in str){
    console.log(i);
    
}




for(let ch of str){
    console.log(ch);
    
}




