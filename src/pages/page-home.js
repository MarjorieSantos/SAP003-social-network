import button from "../components/button.js"
import input from "../components/input.js"


const openMenu = () => {
    window.addEventListener("click", (event) => {
        // const showItensMenu = document.querySelector("#showItensMenu")
        const openMenuModal = document.querySelector(".open-menu-modal")
        const overlay = document.querySelector(".overlay")
        event.preventDefault()
            // showItensMenu.classList.toggle("d-block")
        openMenuModal.classList.toggle("v-visible")
        openMenuModal.classList.toggle("opacity-zero")
        overlay.classList.toggle("d-block")
    })
}

const container = document.createElement("section")
container.classList.add("main")
container.id = "home"

const pageHome = () => {
    window.location.href = '/src/#page-home';
    const template = `
    <div class="overlay d-none"></div>
    <header class="header">
    <div class="text-header">
    ${button({type: 'submit', id: "btnMenu" , title: "<i class='fas fa-bars icon'></i>", class: 'btn', onclick: openMenu()})}
    <div class="open-menu-modal v-hidden opacity-one">
    <nav class="" id="showItensMenu">
    <ul>
        <li>Home</li>
        <li>Perfil</li>
        <li>Sobre</li>
    </ul>
    </nav>
    </div>
    </div>
    <h1>FlyingBook</h1>
     <a href="/src/#login" style = "display: none">Encerrar sessão.</a>
</header>
<section class="desktop-wrap container">
    <aside class="aside">
        <section class="profile-block">
            <div class="background-profile">
                <img src="" alt=""> </div>
            <div class="info-persona">
            ${input({ type: "image", src: "", alt: "sua imagem", class: "profile-user" })}
                <div class="info-name">
                    <p>Nome</p>
                    <p>profissão</p>
                </div>
            </div>
        </section>
    </aside>
    <section class="aside-published">
        <section class="share-info box">
            <label for="text-area"></label>
            <textarea name="text-area" id="text-area" cols="30" rows="5"
                placeholder="O que deseja compartilhar?"></textarea>
            <div class="icon-share">
            ${button({ type: "submit", class: "btn icon", title: "<i class='fas fa-image icon'></i>" })}
                ${button({ type: "submit", class: "btn", title: "Compartilhar" })}
            </div>
        </section>
        <section class="published-content box">
            <div class="published-name box-published">
                <span>Publicado por: Fulana Juarez</span>
                ${button({ type: "button", class: "btn", title: "<i class='fas fa-times'></i>" })}
            </div>
            <div class="published-comment box-published">
                <p>olá, estou bem.</p>
            </div>
            <div class="icon-reaction">
            ${button({ type: "submit", class: "btn", title: "<i class='fas fa-heart icon'></i>" })}
            ${button({ type: "submit", class: "btn", title: "<i class='fas fa-share-alt-square icon'></i>" })}
            </div>
        </section>
    </section>
</section>
<footer>
    @MarjSantos
</footer>
    `
    container.innerHTML = template

    return container
}

export default pageHome;