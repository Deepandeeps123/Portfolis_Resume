let form = document.querySelector("form")
// console.log(form);



console.log(form);
// event - give the input it will refersh it print another time

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    console.log('hello');
    let userName = document.getElementById("userName").value
    let userPass = document.getElementById("userPass").value

    console.log(userName,userPass);




    localStorage.setItem("signupName",userName)
    localStorage.setItem("signupPass",userPass)


    console.log("register successfully");



    open('./Login.html')




    
    


})