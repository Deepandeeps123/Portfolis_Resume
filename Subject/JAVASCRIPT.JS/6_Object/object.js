let ob={
    name:"pen",
    price:20,
    color:["red","blue","black"],
    do:()=>{
        console.log("i can write");
        

    }
}





// ! how to access the element


console.log(ob.name);
console.log(ob.price);
console.log(ob.color);

console.log(ob.color[0]);
console.log(ob.color[1]);
console.log(ob.color[2]);


console.log(ob);
console.log(ob.do());
ob.do()




// or

// console.log(ob["name"]);
// console.log(ob["price"]);
// console.log(ob["color"]);369+





// ! how to modify

ob.name="PEN"
console.log(ob.name);
console.log(ob);




console.log(ob.name="Pen");




ob.price=30
console.log(ob);





// ! how to add new property

ob.brand="Camlin"
console.log(ob);


console.log(ob.brand);




// how to add array element in array

ob.color.push("white")
console.log(ob.color);








// ! how to delete

delete ob.brand
console.log(ob);


console.log(ob.brand);


















// ! how to call function from the object


// console.log(ob.do());    ---->   No write 


ob.do()




// ! Object Method



// * syntax


// let function_name = {
//     key:value

// }





let student = {
    sname:"abc",
    age:10,
    skill:"javascript",
    address:{
        city:"chennai",
        pin:"987654",
    }

}

console.log(student);
console.log(student.address);
console.log(student.address.city);
console.log(student.address.pin);







// ! 1...Object.keys()   ----> Object first letter capital



// it will return an array where all the keys will be stored as array elements


let keys = Object.keys(student)
console.log(keys);





// ! 2. Object.values


// it will return an array where all the values will be stored as array elements.


let value= Object.values(student)
console.log(value);




// ! 3.Object.entries


// it will return one array there all the key and value pairs will be stored in each array


let items = Object.entries(student)
console.log(items);




// !4. Object.freeze()

// freeze not used in modify,add,delete


console.log(student);


Object.freeze(student)

student.phno=1234567890
student.age=20
delete student.age



console.log(student);





// ! 5..Object.isfrozen


// it is used to check whether the object is frozen or not .
// if it is frozen  it will give true otherwise it will give false



console.log(Object.isFrozen(student));



// do not unlock the freeze method





// ! 6.Object.seal()

let student1 = {
    sname:"abc",
    age:10,
    skill:["javascript","Python",'sql'],
    address:{
        city:"chennai",
        pin:"987654",
    }

}


// it is object similar to object.freeze() method but here we can modify the property of the object .we cannot delete or add any element

console.log(student1);

Object.seal(student1)

delete student1.age
student1.phno="1234567890"


student1.age=15

console.log(student1);






// ! 7,Object.isSealed()



// it is used to know whether the object is sealed or not//

console.log(Object.isSealed(student1));





// !  8.Object.assign

// in array two array combine using concat



// it is used to combine the two or more object and return one element



let ob1={
    name:"abc",
    age:10
}



let ob2={
    city:"vadapalani",
    pin:600022
}





console.log(Object.assign({},ob1,ob2));
// console.log(Object.assign(ob1,ob2));
console.log(ob1);
console.log(ob2);






// ! 9..hasOwnProperty()



// it is used to check any property is present or not inside the object






// console.log(Object.hasOwnProperty("pin"));-------give only object name not used in Object....




console.log(ob2.hasOwnProperty("pin"));
console.log(ob2.hasOwnProperty("pincode"));





let arr=[10,20,30,40,50]
// arr.map((ele)=>{
//     console.log(ele);
    

// })


// arr.forEach((ele)=>{
//     console.log(ele);
    
// })


let b=arr.length
for (i=0;i<b;i++){
    console.log(arr[i]);
    
}












// ! Important question...





// difference object.freeze method and object.seal methed
































