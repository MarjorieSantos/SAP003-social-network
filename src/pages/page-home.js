import button from "../components/button.js"
import input from "../components/input.js"

const container = document.createElement("section")
container.classList.add("main")

const pageHome = () => {
    window.location.href = '/#page-home';
    const template = `
    <header class="header">
    <div class="text-header">
    ${button({ type: "menu", class: "btn", title: "<i class='fas fa-bars icon'></i>" })}
        <h1>FlyingBook</h1>
    </div>
    <!-- <a href="/#end-section">Encerrar sessão.</a> -->
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
    <main class=" main ">
        <section class="share-info box">
            <label for="text-area"></label>
            <textarea name="text-area" id="text-area" cols="30" rows="5"
                placeholder="O que deseja compartilhar?"></textarea>
            <div class="icon-share">
            ${button({ type: "submit", class: "btn", title: "<i class='fas fa-image icon'></i>" })}
                ${button({ type: "submit", class: "btn", title: "Compartilhar" })}
            </div>
        </section>
        <section class="published-content box">
            <div class="published-name box-published">
                <span>Publicado por: Fulana Juarez</span>
                ${button({ type: "button", class: "btn", title: "<i class='fas fa-times icon'></i>" })}
            </div>
            <div class="published-comment box-published">
                <p>olá, estou bem.</p>
            </div>
            <div class="icon-reaction">
            ${button({ type: "submit", class: "btn", title: "<i class='fas fa-heart icon'></i>" })}
            ${button({ type: "submit", class: "btn", title: "<i class='fas fa-share-alt-square icon'></i>" })}
            </div>
        </section>
    </main>
</section>
<footer>
    @MarjSantos
</footer>
    `
    container.innerHTML = template

    return container
}

export default pageHome;