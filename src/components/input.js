const input = (props) => {
    return (`
    <input type="${props.type}" placeholder="${props.placeholder}" class="${props.class}" id="${props.id}" alt="${props.txtAlt}">
      `);
}

export default input;