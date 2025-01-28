// ! 1.Sorted array


var arr1=[2,4,6,8,10]
var arr2=[1,3,5,7,9]
var res=[]
var i=0
var j=0
var a=arr1.length
var b=arr2.length
while(i<a && j<b){
    if(arr1[i]<arr2[j]){
        res.push(arr1[i])
        i++
    }
    else{
        res.push(arr2[j])
        j++
    }
}
console.log(res);




// ! 2.. Remove Duplicate in array

var arr=[1,2,3,3,2,4,5,4,6,7,8,7,9,10]
var res=[]
var a=arr.length
arr.forEach(ele =>{
    if(!res.includes(ele)){
        res.push(ele)
    }
})
console.log(res);



// ! 3..Remove duplicate in string



var str="Racecar"
var res=""
var a=str.length
for(i=0;i<a;i++){
    if(!res.includes(str.charAt(i))){
        res=res+str.charAt(i)
    }
}
console.log(res);



// ! 4.count dupilcate value



var arr=[1,2,2,1,3,4,4,5,6,7,8,9,10]
var res=[]
var count=[]
var a=arr.length
arr.forEach(ele =>{
    if(!res.includes(ele)){
        res.push(ele)
    }
    else{
        count.push(ele)
    }
})
console.log(count);
console.log(count.length);




// ! 5.SubArray

var arr=[5,7,11]
var res=[]
var a=arr.length
for (let i=0;i<a;i++){
    for(let j=i;j<a;j++){
        res.push(arr.slice(i,j+1))
    }
}
console.log(res);





// ! 6.Intersection


var a=[5,6,7,3,2,5,1]
var arr2=[11,2,8,5]
var res=[]
var arr1= [...new Set(a)]
var a1=arr1.length
var b1=arr2.length

for(let i=0;i<a1;i++){
    for(let j=0;j<b1;j++){
        if(arr1[i]==arr2[j]){
            res.push(arr1[i])
            break
        }
    }
}
console.log(res);




// ! 7.alternate positiv and negative


var arr=[-1,-2,3,4,-6,-8,9,10]
var res=[]
var a=arr.length
var pos=[]
var neg=[]
// var i=0
// var j=0
for (let i=0;i<a;i++){
    if(arr[i]>0){
        pos.push(arr[i])
    }
    else{
        neg.push(arr[i])
    }
    while(i<a && j<a){
        res.push(pos[i])
        res.push(neg[j])
        i++
        j++
    }
}
console.log(res);
// console.log(neg);





// !  8.Rearrange the rotation number

// var arr=[5,6,8,9,10]
// var res=[]
// var a=arr.length
// for(let i=a-1;i>=0;i--){
//     res.push(arr[i])
// }
// console.log(res);





// let last=arr.pop()
// arr.unshift(last)
// console.log(arr);




// res.push(arr[a-1])

// for (let i = a - 1; i >= 0; i--){
//     res.push(arr[i])


// }
// console.log(res);



// ! 9..Positive and negative


var arr=[-1,1,-2,2,-3,3,-4,4,-5,5]
// var res=neg.concat(pos)
var pos=[]
var neg=[]

for(let i=0;i<arr.length;i++){
    if(arr[i]>0){
        pos.push(arr[i])

    }
    else{
        neg.push(arr[i])
    }
}
console.log(neg.concat(pos));

// console.log(res.concat(neg));





// ! 10 .sort[012]

var arr=[0,1,2]
var res=[]

var a=arr.length
for(let i=0;i<a;i++){
    for(let j=0;j<a;j++){
        res.push(arr[i])
    }
}
console.log(res);

