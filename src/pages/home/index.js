export default () => {
    const container = document.createElement("div");

    const template = `
    <h2>codebook</h2>
    <p>Bem vinda, coder!</p>
    `;

    container.innerHTML = template;

    return container
}