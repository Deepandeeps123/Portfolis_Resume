let ob = {
    name:"abc",
    age:20,
    skill:["python","html",'js']
}


console.log(ob);
console.log(ob.name);
console.log(ob.age);
console.log(ob.skill);





// ! object destructure 


let {name,age,skill} = ob
console.log(name);
console.log(age);




// ! array destructure



let arr = [10,20,30]

let [a,b,c] =arr

console.log(a);
console.log(b);
console.log(c);





// Rest Parameter


// The rest parameter is used to group the remaining element into an array


// it collect "the rest" at the argument that were not explicity specified

// the rest parameter is represented by three dots(...)



let arr1=[10,20,30,40,50,60]
let[p,q,...r]=arr1
console.log(p);
console.log(q);
console.log(r);
console.log(arr1);





// spread operator



// the spread operator in javascript allows to expand an array,object,or iterable into individual element

// it is often used to copy ,merge or pass element

// the spread operator is represented by three dots(...)



let arr2=[9,90]

let combineArr =[...arr1,...arr2]
console.log(combineArr);


function Deepan(firstname,...rasp){
    console.log(firstname);
    console.log(rasp);
    
}


Deepan('deeps','cuddalore',6006108,22)



let ob1={
    name:"deepan",
    age:22
}

let ob2={
    name:"deeps",
    age:23
}


let ob3={...ob1,...ob2}
console.log(ob3);








// shallow copy


let a1=[10,20,30,40,50]
let copy=arr
copy.push(10)
console.log(copy);
console.log(a1);




// deepcopy


let arr4=['hi','hello','bye']
let copy1=[...arr4]
copy.unshift(10)
console.log(copy1);
console.log(arr4);



