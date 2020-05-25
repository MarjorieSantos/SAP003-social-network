import pageLogin from "./pages/login.js"
import pageHome from "./pages/page-home.js"
// import about from "./pages/about.js"
// import profile from "./pages/profile.js"

const main = document.querySelector("#root");

window.addEventListener('load', () => {
    main.appendChild(pageLogin())
})


// const mainHome = document.querySelector("#root-home");

// window.addEventListener('load', () => {
//     mainHome.appendChild(pageHome())
// })

// const headerMenu = document.querySelector("#menu")

// window.addEventListener("click", () => {
//     headerMenu.appendChild(menuHamburguer())
// })

const init = () => {
    window.addEventListener("hashchange", () => {
        main.innerHTML = ""
        switch (window.location.hash) {
            case "#login":
                main.innerHTML = pageLogin();
                break;
            case "#page-home":
                main.appendChild = pageHome();
                break;
            default:
                main.innerHTML = pageLogin();
        }
    }
    )
}

window.addEventListener("load", () => {
    main.appendChild(pageLogin());
    init();
})