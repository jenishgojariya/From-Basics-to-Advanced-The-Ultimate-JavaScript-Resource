const block = document.querySelector('#block');
const modifier = 5;
window.addEventListener('keydown', (event) => {
    const style = block.style;
    switch (event.key) {
        case 'ArrowUp': style.top = ${parseInt(style.top) - modifier}px; break;
        case 'ArrowDown': style.top = ${parseInt(style.top) + modifier}px; break;
        case 'ArrowLeft': style.left = ${parseInt(style.left) - modifier}px; break;
        case 'ArrowRight': style.left = ${parseInt(style.left) + modifier}px; break;
    }
});
