const img = document.createElement('img');
img.src = 'spinner.gif';
const largeImg = document.createElement('img');
largeImg.addEventListener('load', () => img.src = largeImg.src);
largeImg.src = 'bigimg.png';
