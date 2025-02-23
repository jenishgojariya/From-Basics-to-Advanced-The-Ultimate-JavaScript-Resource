// Via innerHTML
document.querySelector('#container').innerHTML = '<button>New Button</button>';

// Via DOM
const newBtn = document.createElement('button');
newBtn.innerHTML = 'New Button';
document.querySelector('#container').appendChild(newBtn);
