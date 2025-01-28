



let form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()



    console.log("hello");

    let loginName=document.getElementById("loginName").value
    let loginPass=document.getElementById("loginPass").value


    console.log(loginPass);
    console.log(loginName);
    



    // localStorage.setItemetItem("signupName")
    // localStorage.setItem("signupPass")


    let userName= localStorage.getItem("signupName")
    let userPass= localStorage.getItem("signupPass")



    console.log(userName);
    console.log(userPass);
    
    console.log("Login successfully");
    




    // let userName= localStorage.getItem("signupName")
    // let userPass= localStorage.getItem("signupPass")



    open("./home.html")










    
    
    



})