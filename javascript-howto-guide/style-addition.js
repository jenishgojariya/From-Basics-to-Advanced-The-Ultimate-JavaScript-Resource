// Inline style
document.querySelector('#myElement').style.color = '#fff';

// Via class
document.querySelector('#myElement').classList.add('mystyle');
// CSS: .mystyle { color: #fff; }

// Dynamic style tag
const style = document.createElement('style');
style.innerHTML = '.mystyle { color: #fff; }';
document.head.appendChild(style);
