// let a=5
// res=true
// b=2
// for (let i=b;a>0;i++)
// {
//     if(a%b==0)
//     {
//         res=false
//     }
// if (res==true)
// {
//     console.log('Prime');
    
// }
// }





// function prime(n){
//     let count=0
//     for(let i=0;i<=n;i++){
//         if (n%i==0){
//             count=count+1
//         }
//     }
// if (count==2){
//     console.log("it is prime ");
    
// }
// else{
//     console.log("Not");
    
// }
// }.

// let a="madam"
// let b=""
// let c=a.length
// for(let i=0;c>0;i++){
//     if (!b.includes(a.charAt(i))){
//         b=a.charAt(i)
//     }
// }
// console.log(b);



// for(let i=1;i<=20;i++){

//     let res=true;
//     for(let j=2;j<i;j++){
//         if(i%j==0){
//             res=false;
//             break

//         }
//     }
//     if(res){
//         console.log(i);
        
//     }
        
    
// }







// n=20
// for(let i=1;i<=n;i++){
//     res=true;
//     for(let j=2;j<i;j++){
//         if(i%j==0){
//             res=false;
//             break
//         }
//     }
//     if (res==true){
//         console.log(i);
        
//     }
// }



// n=20

// for(let i=1;i<=n+1;i++){
//     b=""
//     res=true;
//     for(let j=2;j<i;j++){
//         if(i%j==0){
//             res=false;
//             break
//         }
//     }
//     if (res==true){
//         b=b+i
//         console.log(b);
        
//     }
// }




// function prime(n){
//     for(let i=1;i<=n+1;i++){
//         res=true;
//         for(let j=2;j<i;j++){
//             if(i%j==0){
//                 res=false;
//                 break
//             }
//         }
//         if (res==true){
//             console.log(i);
            

//         }
        
//     }
// }
// prime(20)






// let prime=(n)=>{
//     for(let i=1;i<=n;i++){
//         res=true;
//         for(let j=2;j<i;j++){
//             if(i%j==0){
//                 res=false;
//                 break
//             }
//         }
//         if(res==true){
//             console.log(i);
            
//         }
//     }
// }
// prime(20)







// let prime=function(n){
//     for (let i=1;i<=n;i++){
//         res=true
//         for(let j=2;j<i;j++){
//             if(i%j==0){
//                 res=false
//                 break
//             }
//         }
//         if(res==true){
//             console.log(i);
            
//         }
//     }
// }
// prime(50)



// function prime(n){
//     for(let i=1;i<=n;i++){
//         res=true
//         for(let j=2;j<i;j++){
//             if(i%j==0){
//                 res=false
//                 break
//             }
//         }
//         if(res==true){
//             console.log(i);
            
            
            
            
        
//         }

//     }
// }
// prime(30)











// let arr1=[2,9,12,18]
// let arr2=[3,5,11,20]
// let arr3=[]
// let a=arr1.length
// let b=arr2.length
// let i=0,j=0
// while (i<a && j<b){
//     if(arr1[i]<arr2[j]){
//         arr3.push(arr1[i])
//         i++

//     }
//     else{
//         arr3.push(arr2[j])
//         j++
//     }
// }
// console.log(arr3);





// let arr1=[2,9,12,18]
// let arr2=[3,5,11,20]
// let arr3=[]
// let a1=arr1.length
// let b=arr2.length
// let i=0
// let j=0
// while (i<a1 && j<b){
//     if(arr1[i]<arr2[j]){
//         arr3.push(arr1[i])
//         i++
//     }
//     else{
//         arr3.push(arr2[j])
//         j++
//     }
// }
// console.log(arr3);







// ! Palindrome


// let palindrome=(n)=>{
//     a=n
//     b=""
//     c=a.length
//     for (let i=c;i>=0;i--){
//         b=b+a.charAt(i)
//     }
//     console.log(b);
    
// }
// palindrome("racecar")






// let remove= (n)=>{
//     a=n
//     b=""
//     c=a.length
//     for(let i=0;i<=c;i++){
//         if(!b.includes(a.charAt(i))){
//             b=b+a.charAt(i)
//         }
//     }
//     console.log(b);
    
// }
// remove("madam")


// !primenumber


// let prime =(n)=>{
//     count=0
//     for (let i=1;i<=n;i++){
//         if(n%i==0){
//             count=count+1
//         }
//     }
//     if(count==2){
//         console.log("Prime");
        
//     }
//     else{
//         console.log("Not Prime");
        
//     }

// }

// prime(50)

//! range of prime number 




// let prime1 = (n)=>{
//     for(let i=2;i<=n;i++){
//         res=true
//         for(let j=2;j<i;j++){
//             if(i%j==0){
//                 res=false
//                 break
//             }
//         }
//         if(res==true){
//             console.log(i);
            
//         }
//     }

// }
// prime1(20)



// let arr1=[2,3,5,6]
// let arr2=[9,8,7,10]
// let arr3=[]
// let a=arr1.length
// let b=arr2.length

// let i=0
// let j=0
// while(i<a && j<b){
//     if(arr1[i]<arr2[j]){
//         arr3.push(arr1[i])
//         i++
//     }
//     else{
//         arr3.push(arr2[j])
//         j++
//     }
// }
// console.log(arr3);






// ! palindrome



// let palindrome=(n)=>{
//     let a=n
//     let b=""
//     let c=a.length
//     for(let i=c;i>=0;i--){
//         b=b+a.charAt(i)
//     }
//     if(a==b){
//         console.log("Palindrome");
        
//     }
//     else{
//         console.log("Not Palindrome");
        
//     }
// }
// palindrome("racecar")





// a=12121
// b=a
// c=""
// while(a>=0){
//     rem=a%10
//     c=c*10+rem
//     a=a/10
// }
// console.log(c);




// !remove duplicates



// let remove=(n)=>{
//     let a=n
//     let b=""
//     let c=a.length
//     for(let i=0;i<=c;i++){
//         if(!b.includes(a.charAt(i))){
//             b=b+a.charAt(i)
//         }
//     }
//     console.log(b);
    
// }
// remove("racecar")





// let remove=(n)=>{
//     let a=n
//     let b=""
//     let c=a.length
//     for(let i=0;i<=c;i++){
//         if(!b.includes(a.charAt(i))){
//             b=b+a.charAt(i)
//         }
//     }
//     console.log(b);
    
// }
// remove("malayalam")




// let remove = (n)=>{
//     let a=n
//     let b=""
//     let c=a.length
//     for(let i=0;i<=c;i++){
//         if(!b.includes(a.charAt(i))){
//             b=b+a.charAt(i)
//         }
//     }
//     console.log(b);
    
// }
// remove("racecar")





// let prime = (n)=>{
//     count=0
//     for (i=2;i<=n;i++){
//         if(n%i==0){
//             count=count+1
//         }
//     }
//     if(count==1){
//         console.log("prime");
        
//     }
//     else{
//         console.log("Not Prime");
        
//     }


// }
// prime(23)



// let prime = (n)=>{
//     let b=""
//     for(let i=2;i<=n;i++){
//         res=true
//         for(let j=2;j<i;j++){
//             if(i%j==0){
//                 res=false
//                 break
//             }
            
//         }
//         if(res==true){
//             // b=b+i
//             console.log(i);
            
            
//         }
//     }

// }
// prime(20)






// let prime=(n)=>{
//     for(let i=2;i<=n;i++){
//         res=true
//         for ( let j=2;j<i;j++){
//             if(i%j==0){
//                 res=false
//                 break
//             }
//         }
//         if(res==true){
//             console.log(i);
            
//         }
//     }
// }
// prime(40)





// let prime = (n)=>{
//     b=[]
//     for(let i=2;i<=n;i++){
//         res=true
//         for ( let j=2;j<i;j++){
//             if(i%j==0){
//                 res=false
//                 break

//             }
//         }
        
//         if(res==true){
//             b.push(i)
            
            
            
            
            
//         }
//     }
//     console.log(b);
// }
// prime(20)



// let arr1=[2,9,12,18]
// let arr2=[3,5,11,20]
// let arr3=[]
// let i=0
// let j=0
// let a=arr1.length
// let b=arr2.length

// while (i<a && j<b){
//     if(arr1[i]<arr2[j]){
//         arr3.push(arr1[i])
//         i++
//     }
//     else{
//         arr3.push(arr2[j])
//         j++
//     }
// }
// console.log(arr3);

// !Error

// var a
// console.log(a);



// console.log(a);

// var a
// a=20
// console.log(a);







// console.log(a1);

// let a1
// a1=20
// console.log(a1);





// a1=[3,8,9,10,12]
// a2=[5,7,11]
// res=[]
// a=a1.length
// b=a2.length

// i=0
// j=0
// while(i<a && j<b){
//     if(a1[i]<a2[j]){
//         res.push(a1[i])
//         i++
//     }
//     else{
//         res.push(a2[j])
//         j++
//     }
// }
// console.log(res);










// let a1=[5,7,11]
// let a2=[]
// let c=a1.length
// for(let i=0;i<c;i++){
//     for(let j=i;j<c;j++){
//         let sub= ""
//         // a2.push()
//         for(let k=i;k<c;k++){
//             sub+=a1[ k ]
//             // a2.push(a1[k])

//         }
//         console.log(sub);
        
        

//     }
// }
// console.log(a2);

// let a=[5,6,11]
// let b=-Infinity
// console.log(b);



// var int1=[5,6,7,3,2,5,1]
// a2=[11,2,8,5]
// a3.sort(a1)
// console.log(a3);



// alterenate positive and negative





// ! 1.Sorted two array
// ! 2.remove duplicate
// ! 3.count the duplicate value
// ! 
// ! 4. subarray
// ! 5.Intersection
// ! 6.alterenate positive and negative









// ! 1.Sorted two array


arr1=[2,4,6,8]
arr2=[1,3,5,7,9]
res=[]
a=arr1.length
b=arr2.length
i=0
j=0
while (i<a && j<b){
    if(arr1[i]<=arr2[j]){
        res.push(arr1[i])
        i++

    }
    else{
        res.push(arr2[j])
        j++
    }
}
console.log(res);






//! 2.Remove duplicate


var arr=[1,2,3,3,2,1,5,4,3,6,7,5,8,4,9,10]
var res=[]
arr.forEach(ele =>{
    if(!res.includes(ele)){
        res.push(ele)
    }
})
console.log(res);



var str="racecar"
var res=""

for(let i=0;i<=str.length;i++){
    if(!res.includes(str.charAt(i))){
        res=res+str.charAt(i)
    }
}

console.log(res);




// ! count duplicate value

var arr=[1,2,3,3,2,1,5,4,3,6,7,5,8,4,9,10]
var res=[]
var dup=[]
count=0
arr.forEach(ele =>{
    if(!res.includes(ele)){
        res.push(ele)
    }
    else{
        dup.push(ele)
        count=count+1
    }
})
console.log(res);
console.log(dup);
console.log(count);






// ! 4.SubArray



var arr=[5,7,11]
var res=[]

for (let i=0;i<arr.length;i++){
    for(let j=i;j<arr.length;j++){
        res.push(arr.slice(i,j+1))
        // let sub=""
        // for(let k=i;k<arr.length;k++){
        //     sub+=arr[k]

        }
        // console.log(sub);
        
    }
console.log(res);

    




// ! 5.intersection


var arr1=[5,6,7,3,2,5,1]
var arr2=[11,2,8,5]
var arr3=[...new Set(arr1)]
var result=[]
var i=0
var j=0
var a1=arr1.length
var b1=arr3.length
for(let i=0;i<a1;i++){
    for(let j=0;j<b1;j++){
        if(arr3[i]==arr2[j]){
            result.push(arr3[i])
            break;
        }
    }
}
console.log(result);






//  !   6.alterenate positive and negative


var arr1=[-1,-2,3,4,-6,-8,9,10]


// output==[-1,3,-2,4,-6,9,-8,10]

// let n=arr1.length
// let res=[]
// let pos=[]
// let neg=[]
// for(let i=0;i<n;i++){
//     if(a[i]>0){
//         pos.push(a[i])
//     }
//     else{
//         neg.push(a[i])
//     }
// }



// !7. rotation number


// var arr=[5,6,8,9,10]
// var res1=[]
// var a=arr.length
// for (let i=0;i<a;i++){
//     if(i>a){
//         let a=arr.pop()
//         res1.push(a)
//         break;

        
//     }
//     // else{
//     //     res1.push(arr[i])
//     // }
// }
// console.log(res1);
// // console.log(arr.pop());






// ! 8.negative and positive number




var com=[1,2,3,-1,-2,3,-4,-5]
var pos=[]
var neg=[]
var res=[]
var a=com.length
// for(let i=0;i<a;i++){
//     if(com[i]>0){
//         pos.push(com[i])
//     }
//     else{
//         neg.push(com[i])
//     }
   
// }
// // console.log(pos);
// // console.log(neg);
// console.log(neg.concat(pos));



// if(a[i]>0 && a[j]>0){
//     i++
//     j--
// }



//  ! 9.sort [012]


// [0,0,0,1,1,1,2,2,2]


// ! 10.swap alternate
// [1,2,3,-1,-2,3,-4,-5]
// o/p  [2,1,-1,3,3,-2,-5,-4]





    


