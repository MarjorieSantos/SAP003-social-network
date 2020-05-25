import button from "../components/button.js"

const menuHamburguer = () => {
    const template = `
    <nav class="nav-menu">
    ${button({ class: "btn", id: "openMenu", onclick: 'openMenu', title: "<i class='fas fa-bars icon'></i>"})}
    <ul>
        <li>Home</li>
        <li>Perfil</li>
        <li>Sobre</li>
    </ul>
    </nav>
    `

    return template
}

window.button = {
    openMenu: (event, menuHamburguer) => {
        event.preventDefault();
        menuHamburguer(event);
    },
};

export default menuHamburguer;