
const BASE_URL = "https://b1-v9yn.onrender.com";

async function signup(){

let username=document.getElementById("su_user").value
let password=document.getElementById("su_pass").value

let res=await fetch(BASE_URL + "/signup",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({username,password})
})

let data=await res.json()

alert(data.status)

}


async function login(){

let username=document.getElementById("li_user").value
let password=document.getElementById("li_pass").value

let res=await fetch(BASE_URL + "/login",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({username,password})
})

let data=await res.json()

if(data.status==="success"){
document.getElementById("auth").style.display="none"
document.getElementById("app").style.display="block"
}else{
alert("Invalid login")
}

}


async function upload(){

let file=document.getElementById("plantImage").files[0]

let formData=new FormData()
formData.append("image",file)

let res=await fetch(BASE_URL + "/predict",{
method:"POST",
body:formData
})

let data=await res.json()

document.getElementById("plantName").innerText="Scientific Name: "+data.name
document.getElementById("desc").innerText=data.description
document.getElementById("med").innerText="Medicinal Value: "+data.medicinal

}
