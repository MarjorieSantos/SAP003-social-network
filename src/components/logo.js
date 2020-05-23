const logo = (props) => {
    const template = `
      <img src="${props.img}" class="${props.class} alt="${props.alt}">
      `;
    return template;
}

export default logo;