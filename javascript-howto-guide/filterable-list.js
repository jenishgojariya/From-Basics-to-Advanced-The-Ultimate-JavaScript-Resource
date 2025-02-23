const filter = document.querySelector('#filter');
const list = document.querySelector('#list');
filter.addEventListener('keyup', () => {
    Array.from(list.children).forEach(li => {
        const matchFound = new RegExp(filter.value, 'gi').test(li.innerHTML);
        li.style.display = matchFound ? '' : 'none';
    });
});
