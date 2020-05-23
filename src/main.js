import homeLogin from "./pages/login.js"
// import about from "./pages/about.js"
// import contact from "./pages/contact.js"

const aside = document.querySelector("#login-aside");

window.addEventListener('load', () => {
    aside.appendChild(homeLogin())
})

