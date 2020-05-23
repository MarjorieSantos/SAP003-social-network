export default () => {
    const container = document.createElement("div");

    const template = `
    <h2>Hogwarts</h2>
    <p>J.K. Rowling’s beloved Harry Potter novels were brought to life on screen in eight blockbuster films and went on to inspire the Fantastic Beasts film series, taking us into a new era of the Wizarding World</p>
    `;

    container.innerHTML = template;

    return container
}