let usernameLog = document.querySelector("#username")
let passwordLog = document.querySelector("#password")
let loginBtn = document.querySelector("#login-btn")

loginBtn.addEventListener("click", login)
getUserName = localStorage.getItem("userName")
getpassword = localStorage.getItem("password")
function login(e){
    e.preventDefault()
    if(usernameLog.value === "" || passwordLog.value === ""){
        alert("Please fill the data")
    }else if(
        getUserName && getUserName.trim() === usernameLog.value.trim() &&
        getpassword && getpassword === passwordLog.value
    ){
        setTimeout(()=>{
            window.location = "index.html"
        },1500)
    }else{
        alert("UserName or Password Not Valid")
    }
    usernameLog.value=""
    passwordLog.value=""
}