export default () => {
    const container = document.createElement("div");

    const template = `
    <h2>Hogwarts</h2>
    <p>Follow social network</p>
    `;

    container.innerHTML = template;

    return container
}