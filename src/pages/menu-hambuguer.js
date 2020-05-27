import button from "../components/button.js"

const menuHamburguer = () => {
    const template = `
    ${button({type: "button", class: "btn", id: "btnMenu", value: "openMenu", onclick: 'openMenu', title: "<i class='fas fa-bars icon'></i>"})}
    <nav class="nav-menu">
    <ul id="showItensMenu" style="display:none;">
        <li>Home</li>
        <li>Perfil</li>
        <li>Sobre</li>
    </ul>
    </nav>
    `

    return template
};

const showItensMenu = document.querySelector("#showItensMenu")
const btnMenu = document.querySelector("#btnMenu")

button.onclick = () => {
    event.preventDefault()
    showItensMenu.style.display = "block"
}

// const openMenu = () => {
//     window.addEventListener("click", (event) => {
//         event.preventDefault()
//         showItensMenu.style.display = "block"
//     })
// }

export default menuHamburguer;

// const showItensMenu = document.querySelector("#showItensMenu")
// const btnMenu = document.querySelector("#btnMenu")

// const clickOnMenuHamburguer = () => {
//     showItensMenu.style.display = "block";
// }

// btnMenu.addEventListener("click", clickOnMenuHamburguer)