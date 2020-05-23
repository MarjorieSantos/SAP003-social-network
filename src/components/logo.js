const logo = (props) => {
    const template = `
      <img src="${props.img}" class="${props.class}">
      <p class="${props.class}">${props.text}</p>
      `;

    return template;
}

export default logo;