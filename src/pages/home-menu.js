import button from "../components/button.js"

const container = document.createElement("nav")
container.classList.add("nav-menu")


const menuHamburguer = () => {
    const template = `
    ${button({ class: "btn", onclick: 'openMenu'})}
    <ul>
        <li>Home</li>
        <li>Perfil</li>
        <li>Sobre</li>
    </ul>
    `
    container.innerHTML = template;

    return container
}

window.button = {
    openMenu: (event, menuHamburguer) => {
        event.preventDefault();
        menuHamburguer(event);
    },
};

export default menuHamburguer;
