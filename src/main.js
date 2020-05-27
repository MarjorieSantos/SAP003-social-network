import pageLogin from "./pages/login.js"
import pageHome from "./pages/page-home.js"

const main = document.querySelector("#root");

const init = () => {
    let component = "";
    main.innerHTML = "";
    switch (window.location.hash) {
        case "#login":
            component = pageLogin();
            break;
        case "#page-home":
            component = pageHome();
            break;
        default:
            component = pageLogin();
    }
    return component
}


window.addEventListener("load", () => {
    main.appendChild(init());
})

window.addEventListener("hashchange", () => {
    main.appendChild(init());
})


// const headerMenu = document.querySelector("#menu")

// window.addEventListener("click", () => {

// })