export default () => {
    const container = document.createElement("div");

    const template = `
    <h2>Hogwarts</h2>
    <p>The first Harry Potter book, Harry Potter and the Philosopher’s Stone, was published by Bloomsbury in 1997 to immediate popular and critical acclaim. Six further best-selling books, three companion books, a playscript and two screenplays have since followed. The Harry Potter books have been translated into over 80 languages, won multiple awards, and sold more than 500 million copies worldwide, becoming the best-selling book series in history...</p>
    `;

    container.innerHTML = template;

    return container
}