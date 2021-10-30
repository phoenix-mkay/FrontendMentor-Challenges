const emailInput = document.getElementById("email");
const emailContainer = document.querySelector(".email-div");
const form = document.getElementById("form");
const regex = /^[a-z\d]{2,}[\.-_]{0,1}[a-z/d]{1,}@[\w]{2,}\.[a-z]{2,}$/;
emailInput.addEventListener("input",()=>{
    if(emailInput.value.match(regex)){
        emailContainer.classList.remove("failure")
        emailContainer.classList.add("success")
    }
    else{
        emailContainer.classList.remove("success");
        emailContainer.classList.add("failure");
    }
})
form.addEventListener("submit",e=>{
    e.preventDefault();
    if(emailContainer.classList.contains("success") == true){
        alert("Registration Successful");
    }
    else{
        alert("Please provide a  valid email address");
        emailInput.focus();
    }
})

//console.log(emailContainer.classList.contains());