// ! subarray       ---->   n*n+1/2   
// ! subsequence





// !how to declare array

// collection of a element 
// store in square brackets
// all the value seperated by comma

let arr=[10,'hello',true,[20,'hi','false']]
console.log(arr);




// ! how to know the length of the array



console.log(arr.length);




// ! Methods in array


// ! 1.Push()


// it will add the element at the end of the array
// it will return the modify length of the array





let a=[10,20,30,40]
a.push(50)
console.log(a);


// !push is used in store value it return length
let b=[10,20,30,40]
// let c=b.push(50)
console.log(b.push(50));

console.log(b);



// ! 2.pop()

// it will remove the element from the end
// it will return the removed element

arr2=[10,20,30]
arr2.pop()
console.log(arr2);


// return
console.log(arr2.pop());






// ! 3..unshift()




// this method is used to add element at the starting of the arrray
// it will return the modified length of the array


let arr3=[10,20,30]
arr3.unshift(5)
console.log(arr3);



// return



console.log(arr3.unshift());






// ! 4.shift()

// this method is used to remove the element from the starting of the array
// it will return removed element



let arr4=[10,20,30]
arr4.shift()
console.log(arr4);




// return

console.log(arr4.shift());



// ! 5.includes()


// it will check whether the given element is present or not .if the element is present it will give true otherwise it will give false

console.log(arr4.includes(30));
console.log(arr4.includes(10));
// 10 is remove in arr4





// ! 6.indexof()


// it is used to give the index of the specified element

// if the element is not present then it will give -1

let arr5=[1,2,3,4,5,6,7]
console.log(arr5.indexOf(3));

console.log(arr5.indexOf(100));







// ! 7.concat()

// this method is used to combine two or more than two arrays and it will return one new array.


arr6=[1,2,3]
arr7=[4,5,6]
console.log(arr6.concat(arr7));



// ! 8.reverse()



// reverse method is used to reverse the given array..
// it will modify the original array...


arr8=["hello",'hi','bye']
console.log(arr8.reverse());
console.log(arr8.reverse());



let revarr = arr8.reverse()
console.log(revarr);




// in string split method method is used to convert string to array
// ! 9.join()


// it is used to convert array to string




arr9=['h','e','l','l','o']
console.log(arr9.join());
console.log(arr9.join(""));
console.log(arr9.join("@"));





// ! program   How to reverse in string by using inbuild method


let str="hello"
let strarr=str.split("")
// console.log(strarr);
let rev = strarr.reverse()
// console.log(rev);
let revstr=rev.join("")
console.log(revstr);





// or



console.log(str.split("").reverse().join(""));








// !slice and splice

// slice
aaa=[10,20,30,40]
console.log(aaa.slice(0,3));
console.log(aaa);



// !splice()

// it is for removing



bbb=[10,20,30,40,50,60,70]
bbb.splice(2,2)
console.log(bbb);

// it will replace after remove


arr10=[10,20,30,40,50,60,70]
arr10.splice(2,3,"hello")
console.log(arr10);



// for adding

// add 4
arr11=[1,2,3,5]
arr11.splice(3,0,4)
console.log(arr11);

















