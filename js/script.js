let usernameLog = document.querySelector("#username")
let passwordLog = document.querySelector("#password")
let loginBtn = document.querySelector("#login-btn")

const getUserName = localStorage.getItem("userName");
const getPassword = localStorage.getItem("password");
const BTN1 = document.querySelector(".nav-btn")

    if (localStorage.getItem("password") && localStorage.getItem("userName")) {
        BTN1.innerHTML =
         `
              <button class="btn btn-outline" type="submit"><a class="btn btn-outline-danger d-flex align-items-center" href="register.html">Logout <i class="fa-solid fa-right-from-bracket ps-1"></i></a></button>
        `
    }




