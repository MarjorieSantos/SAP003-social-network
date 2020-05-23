const button = (props) => {
    return (`
    <button class="${props.class}" onclick="button.handleClick('${props.id}')" >${props.title}</button>
  `);
}

// window.button = {
//     handleClick: (event, callback) => {
//         event.preventDefault();
//         callback(event);
//     },
// };

export default button;
