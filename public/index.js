//create user 
function createUser(){
let firstName= document.getElementById('firstName')
let lastName = document.getElementById('lastName')
let email = document.getElementById('email')
let password = document.getElementById('password')
let about = document.getElementById('about')
let newUser={
firstName: firstName.value,
lastName:lastName.value,
email:email.value,
password:password.value,
about:about.value
}
fetch("/api/user")
}