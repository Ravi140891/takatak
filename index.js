const signupBtn = document.querySelector('.signup')
const loginBtn = document.querySelector('.login')

const loginForm = document.querySelector('.login-container')
const signUpForm = document.querySelector('.signup-container')

signupBtn.addEventListener('click', ()=>{
    signUpForm.style.display ="block"
})

loginBtn.addEventListener('click', ()=>{
    loginForm.style.display ="block"
})

