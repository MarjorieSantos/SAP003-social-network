const button = (props) => {
    return `
    <button type= ${props.type} id= ${props.id}  class="${props.class}" onclick="(${props.id})">
    ${props.title}</button>
    `
}



export default button;

// onclick="('${props.onclick}')";
// onclick: "handleClick",