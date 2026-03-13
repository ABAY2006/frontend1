const API = "https://b-qbzi.onrender.com";

async function signup(){

const username = document.getElementById("su_user").value
const password = document.getElementById("su_pass").value

if(!username || !password){
alert("Enter username and password")
return
}

try{

const res = await fetch(API + "/signup",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
username:username,
password:password
})
})

const data = await res.json()

alert(data.message)

}catch(error){

alert("Signup failed")
console.log(error)

}

}

async function login(){

const username = document.getElementById("li_user").value
const password = document.getElementById("li_pass").value

const res = await fetch(API + "/login",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
username:username,
password:password
})
})

const data = await res.json()

alert(data.message)

}
