document.getElementById("contactForm").addEventListener("sumbit", function(event){
    event.preventDefault()



    const Message=document.getElementById("successMessage");
    Message.style.display="block";

    document.getElementById("contactForm").reset();
let click=document.getElementById("submit")
click.addEventListener("click",()=>{
    click.preventDefault()
    const Message=document.getElementById("successMessage");
    Message.style.display="block";

})

})