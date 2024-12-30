
document.getElementById("login").addEventListener('submit',(event)=>{
    event.preventDefault();

const email=document.getElementById("email").value;
const pwd=document.getElementById("password").value;
fetch("/login",{
    method:"POST",
    headers:{"Content-type":"application/json"},
    body:JSON.stringify({
        email:email,
        pwd:pwd
    })
}).then(response=>response.json()).then(data=>{
    console.log(data.message);
    if(data.message!=="Invalid email or password."){
        document.getElementById("correct").innerHTML=data.message;
        setTimeout(() => {
            window.location.href = "/";
            localStorage.setItem("user", JSON.stringify(data.user));
        }, 3000);
    }else{
        const message=document.getElementById("correct")
        message.innerHTML=data.message;
        message.style.color = "green";
    }
   
}).catch((error) => document.getElementById("correct").innerHTML=data.message);
});