const API = "https://backend1-0um3.onrender.com";

// SIGNUP
async function signup(){

const username=document.getElementById("su_user").value
const password=document.getElementById("su_pass").value

const res=await fetch(API+"/signup",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({username,password})
})

const data=await res.json()

alert(data.message)

}

// LOGIN
async function login(){

const username=document.getElementById("li_user").value
const password=document.getElementById("li_pass").value

const res=await fetch(API+"/login",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({username,password})
})

const data=await res.json()

alert(data.message)

}

// IDENTIFY PLANT
async function identifyPlant(){

const file=document.getElementById("plantImage").files[0]

if(!file){
alert("Please upload image")
return
}

const formData=new FormData()
formData.append("image",file)

const res=await fetch(API+"/identify",{
method:"POST",
body:formData
})

const data=await res.json()

if(data.error){
document.getElementById("result").innerHTML=data.error
return
}

document.getElementById("result").innerHTML=

`
<h3>Scientific Name</h3>
<p>${data.scientific}</p>

<h3>Description</h3>
<p>${data.description}</p>

<h3>Medicinal Uses</h3>
<p>${data.uses}</p>
`

}
