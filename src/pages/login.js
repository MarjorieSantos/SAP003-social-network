import button from "../components/button.js"
import input from "../components/input.js"
import logo from "../components/logo.js"

const container = document.createElement("section")
container.classList.add("main")

const homeLogin = () => {
  const template = `
  <header class="header" id="header">
  <section class="container">
    ${logo({ img: "./assets/login-butterfly.svg", class: "login-img", alt: "image page login butterfly" })}
  </section>
</header>
<aside>
      <section class="container">
        <div class="respects">
          <h1>FlyingBook</h1>
          <p>Bem vinda, flying!</p>
        </div>
        <form>
          <div class="login-inputs space-item">
            ${input({ type: "text", placeholder: "exemplo@email.com" })}
            ${input({ type: "password", placeholder: "senha" })}
            ${button({ class: "btn", title: "Log In" })}
          </div>
          <div class="login-social space-item">
            <p>Você pode entrar com:</p>
            <a href="https://www.facebook.com/"><img src="./assets/icons/facebook.svg" alt="facebook icone"
                class="icon"></a>
            <a href="https://www.gmail.com/"><img src="./assets/icons/google.svg" alt="google icone" class="icon"></a>
          </div>
          <div class="login-new space-item">
            <p>Não tem uma conta?</p>
            <p>Registrar-se</p>
          </div>
        </form>
      </section>
      </aside>
    `
  container.innerHTML = template;

  return container
}

export default homeLogin;