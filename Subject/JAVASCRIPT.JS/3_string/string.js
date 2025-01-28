//* How to declare string

let str1 = "hello"
let str2 = 'HELLO'
let str3 = `hello`



// * How to know the length

let length = str1.length
console.log(length);



//* String Method


//! 1.toupperCase()

// It is  used to  convert the string into uppercase and it will return one new string



let upper = str1.toUpperCase()
console.log(upper);          

console.log(str1);




//! 2.toLowercase

// It is used to convert the string into lowercase and it will return one new string

let lower = str2.toLowerCase()
console.log(lower);
console.log(str2)



//! 3.indexof

// It is used to give the index of particular character
// It will take the first occurance

let str4 = "Hello how are you"
let index = str4.indexOf('o')
console.log(index);


// ! 4.charAt()

let charAt = str4.charAt(4)
console.log(charAt);

let charAt1 = str4.charAt(10)
console.log(charAt1);



// ! 5.concat()

// It is used to combine two or more than 2 strings and it will return one new string.


let str5 = 'Hello'
let str6 = 'How are you'
let combined = str5.concat(str6)
console.log(combined);


let combined1 = str5.concat(" ",str6)
console.log(combined1);


let combined2 = str5.concat(" ",str6," fine")
console.log(combined2);






// !  6.Trim()


// It is used to remove the white spaces from both the sides of the string and it will return one new string



let str7 = "  hello   "
let length1 = str7.length
console.log(str7)        

console.log(length1);



let trim = str7.trim()
console.log(trim);
let length2 = trim.length
console.log(length2);





// ! 7. includes()

// It is used to check whether any character or string is present or not .
// if it is present it will give true otherwise itwill give False..

let str8 = 'Hello every one'
let include = str8.includes('o')
console.log(include);

let include1 = str8.includes('h')
console.log(include1);

let include2 = str8.includes('Z')
console.log(include2);



// ! 8.split()


// It is used to convert any string to array

let str9 = "I am fine"
let split = str9.split(" ")
console.log(split);

let split1 = str9.split("")
console.log(split1);




//! 9. slice()

//  it is used to extract the character or string from another string
// it will take two parameters ,(stratindex and endindex)
// it will not include the endindex value.


let str10 = "hello how are you"
let slice = str10.slice(2,8)
console.log(slice);


// if we don't give the endindex ,then from the starting it will print till the length of the string

let slice1 = str10.slice(2)
console.log(slice1);

console.log(str10.slice(0))


// we can give negative value as an index , then it will take from the last


console.log(str10.slice(2,-2));
console.log(str10.slice(3,-3));
console.log(str10.slice(4,-4));
console.log(str10.slice(5,-5));
console.log(str10.slice(6,-6));
console.log(str10.slice(7,-7));
console.log(str10.slice(8,-8));


// we can't give starindex > endindex
console.log(str10.slice(4,0));





//! 10. substring()


// it is used to extract the character or string from another string
// it will take two parameter ,(startindex,endindex)
// it will not includes the endindex value



// we can't give negative value.It will be converted to 0 index.

let str11 = 'hello how are you'
let sub = str11.substring(-4,4)
console.log(sub);

console.log(str11.substring(-4));



// here we can give startindex > endindex
//  it will swap these two index


console.log(str11.substring(7,1));











// // !  9. startswith()

// let str9 = 'Javascript'
// let start = str9.startsWith('J')
// console.log(start);






// // ! 10 .endswith()

// let str10 = 'Javascript'
// let end = str10.endsWith('J')
// console.log(end);






// ! Palindrome

 let num='madam'
 console.log(num.slice(0,));
 


let str="hello"
console.log(str.charAt(0));
console.log(str.charAt(1));
console.log(str.charAt(2));
console.log(str.charAt(3));
console.log(str.charAt(4));



// let str222=""
// for(let j=4;j>=0;j++);
// {
//     // console.log(str.charAt(i));
//     str222=str222+str.charAt(j)
    
// }
// console.log(str222);





let n="racecar"
let n1=""
let a=n.length
for(let i=a;i>=0;i--)
{
    n1=n1+n.charAt(i)
}
console.log(n1);










// ! duplicate remove

let m="madam"
let m2=m.length
let m1=""
for(let i=0;i<m2;i++)
{
if(!m1.includes(m.charAt(i)))
{
    m1=m1+m.charAt(i)
}
}

console.log(m1);




// let b=1010
// let b1=Binary     (10)





