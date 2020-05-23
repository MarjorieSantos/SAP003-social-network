const button = (props) => {
    return (`
    <button class="${props.class}" onclick="button.handleClick('${props.id}')" > <a href="home-network.html"> ${props.title}</a></button>
  `);
}

// window.button = {
//     handleClick: (event, callback) => {
//         event.preventDefault();
//         callback(event);
//     },
// };

export default button;
