let f = document.getElementById('f')

        f.addEventListener("sumbit",(e)=>{
            e.preventDefault()

            let num1=parseInt( document.getElementById("num1").value)
            let num2=parseInt( document.getElementById("num2").value)

            let sum=num1+num2
            
            


            let table=document.getElementById("t")
            let tr = document.createElement('tr')

            tr.innerHTML = `
            <th>${num1}</th>
            <th>${num2}</th>
            <th>${sum}</th>`

            table.append(tr)
            console.log(sum)
            console.log(num1)
            

})
        