const button = (props) => {
    return (`
    <button class="${props.class}" id="${props.id}" onclick="('${props.id}')" > ${props.title}</button>
  `);
}

window.button = {
    handleClick: (event, callback) => {
        event.preventDefault();
        callback(event);
    },
};

export default button;
