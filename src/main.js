import homeLogin from "./pages/login.js"
// import about from "./pages/about.js"
// import contact from "./pages/contact.js"

const main = document.querySelector("#root");

window.addEventListener('load', () => {
    main.appendChild(homeLogin())
})

