const getCSS = (variavel) => {
    return getComputedStyle(document.body).getPropertyValue(variavel)
}
const tickConfig = {
    family: getCSS('--font'),
    size: 16,
    color: getCSS('--primary-color')
}

export { getCSS, tickConfig };