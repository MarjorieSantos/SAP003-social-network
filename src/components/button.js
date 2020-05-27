const button = (props) => {
    return `
    <button type="${props.type}" class="${props.class}" id="${props.id}" value="${props.value}", onclick="button.handleClick('${props.onclick}')"> ${props.title}</button>
    `
}


export default button;

// onclick="('${props.onclick}')"
// onclick: "handleClick",