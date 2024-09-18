const animals = require("../../data/animals");

document.querySelector('#btnSend').addEventListener('click', ()=>{

    const idArp= document.querySelector('#animals').value;  
   
    
    const data= {id:idArp,name:animals,value:valueArp};
    
    
    fetch('http://localhost:3000', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
    .then( res => res.json())
    .then( res => fetch("http://localhost:3000"))
    .catch( err => console.log(err))
});

